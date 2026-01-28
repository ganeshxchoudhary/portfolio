const express = require('express');
const auth = require('../middleware/auth');
const createCRUD = require('../controllers/crudController');

const defineRoutes = (Model) => {
    const router = express.Router();
    const controller = createCRUD(Model);

    router.get('/', controller.getAll);
    router.get('/:id', controller.getOne);
    router.post('/', auth, controller.create);
    router.put('/:id', auth, controller.update);
    router.delete('/:id', auth, controller.delete);

    return router;
};

module.exports = defineRoutes;
