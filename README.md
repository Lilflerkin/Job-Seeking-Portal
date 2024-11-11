# Job-Seeking-Portal

This project is an API-based job application management system for employers to view applicants who have applied to their job listings. It enables employers to retrieve application details, including applicant information, cover letters, resumes, and contact information, through a REST API.

## Features
- **User Roles**: Supports different user roles for "Job Seekers" and "Employers."
- **Application Management**: 
  - Employers can view a list of job applicants with relevant information like name, resume, cover letter, and contact details.
- **Authentication**: 
  - Token-based authentication ensures secure access to protected endpoints.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Cloud Storage**: Cloudinary (for storing resume files)
- **Authentication**: JSON Web Tokens (JWT)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/Job-Seeking-Portal.git
   cd Job-Seeking-Portal
## Install dependencies:
```npm install express mongoose jsonwebtoken dotenv cloudinary multer bcryptjs express-validator```

## Set up environment variables:
1. Create a .env file in the root directory.

2. Add the following variables to the .env file:
```
PORT=4000
MONGO_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_jwt_secret
```
## Start the server:
```npm start```
The server should be running on http://localhost:4000.
