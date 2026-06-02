# 📊 Portfolio Backend Dashboard

A modern Portfolio Backend Dashboard built with Node.js and Express.js. This project provides a simple admin dashboard for managing portfolio projects through a clean web interface.

## 🚀 Features

- View all projects
- Add new projects
- Delete existing projects
- REST API endpoints
- Responsive dashboard interface
- Express.js backend
- CORS support
- Environment variable configuration

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- HTML5
- CSS3
- Nodemon
- Dotenv
- CORS

## 📂 Project Structure

```text
Backend/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── src/
│   └── server.js
│
├── .env
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project Folder

```bash
cd Backend
```

### Install Dependencies

```bash
npm install
```

## ▶️ Run Project

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
node src/server.js
```

## 🌐 API Endpoints

### Home Route

```http
GET /
```

Response:

```json
{
  "success": true,
  "message": "Portfolio Backend API Running Successfully"
}
```

### Get All Projects

```http
GET /api/projects
```

### Add Project

```http
POST /api/admin/projects
```

Request Body:

```json
{
  "title": "Project Name",
  "description": "Project Description",
  "tools": ["Node.js", "JavaScript"],
  "status": "Completed"
}
```

### Delete Project

```http
DELETE /api/admin/projects/:id
```

## 📊 Dashboard

Open your browser and visit:

```text
http://localhost:5000
```

The dashboard allows administrators to:

- View projects
- Add projects
- Remove projects

## 🔮 Future Improvements

- Project Editing
- Authentication System
- MongoDB Integration
- User Management
- Analytics Dashboard
- Cloud Deployment

## 👨‍💻 Author

**Yusuph Fanuel**

Data Analyst | Backend Developer | Data Science Enthusiast

### Skills

- Data Analysis
- SQL
- Python
- Power BI
- Excel
- Node.js
- Express.js

## 📜 License

This project is licensed under the MIT License.
