<div align="center">
  <h3 align="center">Patient Sync</h3>
   <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>
</div>

## <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)

## <a name="introduction">Introduction</a>

A healthcare application using Next.js that allows patients to easily register, book, and manage their appointments with doctors. The project aims to test Appwrite as the database.

## <a name="tech-stack">Tech Stack</a>

- Next.js
- Appwrite
- Typescript
- TailwindCSS
- ShadCN

- ## <a name="features">Features</a>

- **Register as a Patient**: Users can sign up and create a personal profile as a patient

- **Book a New Appointment with Doctor**: Patients can schedule appointments with doctors at their convenience and can book multiple appointments

- **Complete Responsiveness**: The application works seamlessly on all device types and screen sizes

- **File Upload Using Appwrite Storage**: Users can upload and store files securely within the app using Appwrite storage services

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Cloning the Repository**

```bash
git clone https://github.com/abrehan2/Patient-Sync.git
cd Patient-Sync
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# APP-WRITE
NEXT_APP_WRITE_PROJECT_ID = ""
NEXT_APP_WRITE_SECRET_API = ""
NEXT_APP_WRITE_DB_ID = ""
NEXT_APP_WRITE_PATIENT_COLLECTION_ID = ""
NEXT_APP_WRITE_APPOINTMENT_COLLECTION_ID = ""
NEXT_APP_WRITE_STORAGE_BUCKET_ID = ""
NEXT_PUBLIC_ENDPOINT = "https://cloud.appwrite.io/v1"
```
Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
