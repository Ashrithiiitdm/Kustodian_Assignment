# Assignment for Kustodian.Life Internship

A simple frontend and backend application that ingests data from an uploaded Excel file and stores it in a database. The application also provides an API to retrieve the stored data.

## Overview
1. **Data Upload**: Users can easily upload an Excel file containing client information.
2. **Data Storage**: The uploaded data is automatically stored in a secure database.
3. **Data Access**: Users can view all client details in an easy-to-read format.
4. **Simple Interface**: The application provides a clean and user-friendly interface to interact with the data.


## Tech Stack

### Backend
- Built with FastAPI for high performance and easy API development.
- Firebase integration for storing and retrieving client data.
- Supports uploading Excel files to populate the database.
- CORS enabled for seamless frontend-backend communication.

### Frontend
- Built with React and Vite for fast development and performance.
- TailwindCSS for styling.
- ShadCN for components and  UI elements like cards, buttons, dialogs, and more.
- Axios for API integration with the backend.
- Displays a list of clients with detailed information in a responsive UI.

## Setup Instructions

### Prerequisites
- Python 3.8 or higher
- Node.js 14 or higher
- npm
- Firebase account
- Firebase project set up with Firestore database
- Firebase credentials JSON file

Clone the repository:
```bash
git clone https://github.com/Ashrithiiitdm/Kustodian_Assignment.git

cd Kustodian_Assignment
```

### Backend Setup

- Navigate to the backend directory:
```bash
cd backend
```
- Create a .env file with the following variables:
```bash
DB_URL='<firebase_database_url>'
FIREBASE_CRED_PATH='<path_to_firebase_credentials_json>'
```
- Install the required Python packages:
```bash
pip install -r requirements.txt
```
- Run the FastAPI server:
```bash
uvicorn main:app --reload
```
- The backend will be running at `http://127.0.0.1:8000`.

To view whether the backend is running, you can visit the following URL in your browser and check out the API documentation:
```bash
http://127.0.0:8000/docs
```

### Frontend Setup

- Navigate to the frontend directory:
```bash
cd frontend
```
- Create a .env file with the following variables:
```bash
VITE_BACKEND_URL=http://127.0.0:8000
```

- Install the required Node.js packages:
```bash
npm install
```

- Start the React development server:
```bash
npm run dev
```

To view the frontend application, open your browser and navigate to:
```bash
http://localhost:5173
```



