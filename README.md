# Portfolio Pro

A modern, full-stack portfolio website built with React and Node.js, featuring a dynamic admin dashboard for content management.

## 🚀 Features

- **Modern React Frontend**: Built with Vite for fast development and optimized builds
- **Node.js Backend**: RESTful API with Express.js
- **Admin Dashboard**: Dynamic content management system
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Database Integration**: SQLite for development, easily configurable for production
- **Authentication**: Secure login system for admin access
- **Contact Form**: Functional contact form with backend integration
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Modern CSS with responsive design
- Font optimization with Google Fonts

### Backend
- Node.js
- Express.js
- SQLite (development)
- JWT Authentication
- CORS enabled
- RESTful API design

### Deployment
- Netlify (Frontend)
- Netlify Functions (Backend API)

## 📁 Project Structure

```
portfolio-pro/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── layouts/        # Layout components
│   │   ├── services/       # API service functions
│   │   └── assets/         # Static assets
│   ├── public/             # Public assets
│   └── package.json        # Frontend dependencies
├── backend/                 # Node.js backend (Python version)
│   ├── main.py            # Main application file
│   ├── models.py          # Database models
│   ├── requirements.txt   # Python dependencies
│   └── database.db        # SQLite database
├── backend 2/              # Node.js backend (JavaScript version)
│   ├── index.js           # Main server file
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   └── package.json       # Backend dependencies
├── functions/              # Netlify Functions
│   └── api.js             # Serverless API handler
└── netlify.toml           # Netlify configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ganeshxchoudhary/portfolio.git
   cd portfolio-pro
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend\ 2
   npm install
   ```

4. **Environment Setup**
   Create a `.env` file in the backend directory:
   ```env
   JWT_SECRET=your_jwt_secret_here
   PORT=3001
   ```

### Development

1. **Start the Backend Server**
   ```bash
   cd backend\ 2
   npm start
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001

### Building for Production

1. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📝 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Admin registration (if enabled)

### Content Management
- `GET /api/content/skills` - Get all skills
- `POST /api/content/skills` - Add new skill
- `PUT /api/content/skills/:id` - Update skill
- `DELETE /api/content/skills/:id` - Delete skill

### Contact
- `POST /api/contact` - Submit contact form

## 🎨 Customization

### Styling
- Modify `frontend/src/index.css` for global styles
- Update component-specific styles in respective component files
- Customize color scheme and typography in CSS variables

### Content
- Update personal information in the React components
- Modify the database schema in `backend 2/models/` for additional fields
- Add new API endpoints in `backend 2/routes/`

### Assets
- Replace images in `frontend/src/assets/`
- Update favicon and meta tags in `frontend/index.html`

## 🚀 Deployment

### Netlify Deployment

1. **Connect Repository**
   - Link your GitHub repository to Netlify
   - Set build command: `cd frontend && npm run build`
   - Set publish directory: `frontend/dist`

2. **Environment Variables**
   Set the following in Netlify dashboard:
   ```
   JWT_SECRET=your_production_jwt_secret
   ```

3. **Functions**
   - Netlify Functions are automatically deployed from the `functions/` directory
   - API endpoints will be available at `/.netlify/functions/api`

### Manual Deployment

1. **Build the project**
   ```bash
   cd frontend && npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ganesh Choudhary**
- GitHub: [@ganeshxchoudhary](https://github.com/ganeshxchoudhary)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the fast build tool
- Netlify for hosting and serverless functions
- All open-source contributors

---

⭐ Star this repository if you found it helpful!