# Cloud Clicker

Cloud Clicker is a web application built with Next.js and React, styled with Tailwind CSS, and integrated with Firebase Realtime Database and NextAuth for authentication. The application features a simple user interface with 4 buttons, each tracking the number of times it has been clicked. All clicks are updated and stored in real-time in Firebase and visualized through Recharts on a dashboard.

## Deployed Version Link
Deployed using **Vercel**
https://cloud-clicker-zeta.vercel.app/

## Video Walkthrough

Here's a walkthrough of implemented website:

<img src='https://github.com/yuvi55/cloudClicker/blob/main/gif/CloudClick.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

## Technologies Used

- **Next.js**: The React framework for production.
- **ReactJS**: A JavaScript library for building user interfaces.
- **Firebase Realtime Database**: A cloud-hosted database. Data is stored as JSON and synchronized in real-time to every connected client.
- **NextAuth**: For authentication.
- **Recharts**: A composable charting library built on React components.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (>= 10.13, except for v13)
- npm (typically comes with Node.js)

### Installation

Clone the repository:

```bash
git clone https://github.com/yuvi55/cloudClicker
cd cloud-clicker

```
### Install necessary dependencies

- Run the following command on your terminal
```bash
npm i
```


### Environment Configuration

Firebase Configuration
Create a Firebase project in the Firebase console and add a new web application. You'll need to configure the Firebase Realtime Database and obtain your Firebase credentials which will be used in the application.

Create a .env.local file at the root of your project and add your Firebase configuration:

```bash

GOOGLE_CLIENT_ID = your_api_key
GOOGLE_CLIENT_SECRET = your_api_key
NEXTAUTH_SECRET = your_api_key
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_DATABASE_URL=your_database_url
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

```

### Running the application locally

Use the following command: 
```bash
npm run dev
```

Open your web browser and visit http://localhost:3000 to view the application.

## Features
- **User Authentication**: Secure login with NextAuth.
- **Click Counters**: Four interactive buttons, each tracking its own number of clicks in real-time.
- **Real-Time Updates**: All clicks are updated and reflected in real-time across all clients.
- **Dashboard**: Visualize the click data with Recharts.
- **Logging**: Run the app locally and check the app.logger file located on the root directory of the application for logs of which user clicked the button

### License
**MIT**
