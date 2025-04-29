# Subscription Management System - Frontend

Frontend interface for managing users, plans, and subscriptions with real-time status tracking.

![Dashboard Preview](screenshot.png)

 <!-- Add your screenshot later -->

## Features
- 👥 **User Management**: Create, view, and delete users
- 📋 **Plan Management**: Define subscription plans with duration/price
- 🔄 **Subscription Flow**: Simulate payments and assign plans
- ⏳ **Expiration Badges**: Visual indicators for subscription statuses
- 📱 **Responsive Design**: Works on desktop and mobile

## Quick Start

### Prerequisites
- Node.js 18+
- Backend server running ([see backend README](#))
- Git

### Installation
```bash
git clone https://github.com/your/repo.git
cd subscription-frontend
npm install

npm run dev  

src/
├── components/  # Reusable UI components
│   ├── users/
│   ├── plans/
│   └── subscriptions/
├── hooks/       # Custom hooks
├── pages/       # Main views
├── services/    # API service layer
└── utils/       # Helper functions