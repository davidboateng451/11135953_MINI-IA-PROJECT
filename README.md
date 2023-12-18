# 11135953_MINI-IA-PROJECT
Electronic Medical Record System
The Electronic Medical Record System is a software application developed for the University of Ghana Medical Center (UGMC) using NodeJS, Express Framework, and MongoDB. It is designed to provide efficient and reliable access to patient information for the front-desk executive, nurse, and doctor.

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You will need the following software installed on your system:

NodeJS (https://nodejs.org/)
MongoDB (https://www.mongodb.com/)
Installing
Clone the repository:

bash
Copy code
git clone https://github.com/davidboateng451/11135953_Mini IA Project.git
Navigate to the project directory:

bash
Copy code
cd 11135953_Mini IA Project
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Functional Requirements
The front-desk executive should be able to register patients who do not already exist.
The front-desk executive should be able to start an encounter for a patient.
The nurse should be able to submit information on patient vitals.
The doctor should be able to view a list of patients.
The doctor should be able to view the details of a specific patient.
REST API Endpoints
Patient Endpoints
POST /api/patients - Register a new patient.

POST /api/encounters - Start a new encounter for a patient.

POST /api/vitals - Submit patient vitals information.

GET /api/patients - Get a list of all patients.

GET /api/patients/:id - Get the details of a specific patient.

License
This project is licensed under the MIT License - see the LICENSE file for details.
