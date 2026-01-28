// Generic CRUD logic to be used by various routes
const createCRUD = (Model) => ({
    // GET all
    getAll: async (req, res) => {
        try {
            const items = await Model.find().sort({ createdAt: -1 });
            res.json({ success: true, data: items });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // GET one
    getOne: async (req, res) => {
        try {
            const item = await Model.findById(req.params.id);
            if (!item) return res.status(404).json({ success: false, message: 'Item not found' });
            res.json({ success: true, data: item });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // CREATE
    create: async (req, res) => {
        try {
            const newItem = new Model(req.body);
            await newItem.save();
            res.status(201).json({ success: true, data: newItem });
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    },

    // UPDATE
    update: async (req, res) => {
        try {
            const updatedItem = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedItem) return res.status(404).json({ success: false, message: 'Item not found' });
            res.json({ success: true, data: updatedItem });
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    },

    // DELETE
    delete: async (req, res) => {
        try {
            const item = await Model.findByIdAndDelete(req.params.id);
            if (!item) return res.status(404).json({ success: false, message: 'Item not found' });
            res.json({ success: true, message: 'Item deleted successfully' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
});

module.exports = createCRUD;
