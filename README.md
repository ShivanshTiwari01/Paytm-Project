# Paytm Project - Digital Wallet Application

A full-stack digital wallet application built with React, TypeScript, Node.js, Express, and MongoDB. Users can sign up, manage their accounts, view balances, and transfer money to other users.

## 🚀 Features

- **User Authentication**: Secure signup/signin with JWT tokens
- **Account Management**: View and update user profile
- **Balance Tracking**: Real-time balance updates
- **Money Transfer**: Peer-to-peer money transfers with transaction safety
- **User Search**: Find other users to send money
- **Protected Routes**: Secure dashboard and transaction pages
- **Responsive UI**: Clean, modern interface with Tailwind CSS

## 🛠️ Tech Stack

### Frontend

- **React 19** with TypeScript
- **React Router** for navigation
- **Axios** for API calls
- **Tailwind CSS** for styling
- **Vite** for build tooling

### Backend

- **Node.js** with Express
- **TypeScript** for type safety
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Zod** for validation

## 📁 Project Structure

```
.
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/          # Authentication components
│   │   │   ├── dashboard/     # Dashboard components
│   │   │   └── ui/            # Reusable UI components
│   │   ├── config/            # API configuration
│   │   ├── services/          # API service layer
│   │   └── App.tsx            # Main app component
│   └── package.json
│
└── backend/
    ├── src/
    │   ├── api/
    │   │   ├── user/          # User routes & controllers
    │   │   └── account/       # Account routes & controllers
    │   ├── config/            # Database configuration
    │   ├── helpers/           # Utility functions
    │   ├── middleware/        # Auth middleware
    │   ├── models/            # Mongoose models
    │   └── types/             # TypeScript type definitions
    └── package.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ShivanshTiwari01/Paytm-Project
   cd paytm-project
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:

   ```env
   PORT=8080
   MONGO_URI=mongodb://localhost:27017/paytm
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXP=7d
   ```

3. **Frontend Setup**

   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the frontend directory:

   ```env
   VITE_BASE_URL=http://localhost:8080/api/v1
   ```

### Running the Application

1. **Start Backend Server**

   ```bash
   cd backend
   npm run dev
   ```

   Server runs on `http://localhost:8080`

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Application runs on `http://localhost:5173`

## 📡 API Endpoints

### User Routes (`/api/v1/user`)

| Method | Endpoint  | Description             | Auth Required |
| ------ | --------- | ----------------------- | ------------- |
| POST   | `/signup` | Create new user account | No            |
| POST   | `/signin` | Login user              | No            |
| PUT    | `/update` | Update user details     | Yes           |
| GET    | `/bulk`   | Search users            | Yes           |

### Account Routes (`/api/v1/account`)

| Method | Endpoint    | Description      | Auth Required |
| ------ | ----------- | ---------------- | ------------- |
| GET    | `/balance`  | Get user balance | Yes           |
| PATCH  | `/transfer` | Transfer money   | Yes           |

## 🔒 Authentication

The application uses JWT (JSON Web Tokens) for authentication:

1. User signs up or signs in
2. Server generates JWT token
3. Token stored in `localStorage`
4. Token sent in `Authorization` header for protected routes
5. Middleware validates token on backend

## 💾 Database Models

### User Model

```typescript
{
  firstName: String,
  lastName: String,
  email: String,
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Account Model

```typescript
{
  userId: ObjectId (ref: User),
  balance: Number,
  createdAt: Date,
  updatedAt: Date
}
```

## 🎨 Key Components

### Frontend

- [`Signup`](frontend/src/components/auth/Signup.tsx) - User registration
- [`Signin`](frontend/src/components/auth/Signin.tsx) - User login
- [`Dashboard`](frontend/src/components/dashboard/Dashboard.tsx) - Main dashboard view
- [`SendMoney`](frontend/src/components/dashboard/SendMoney.tsx) - Money transfer interface
- [`Users`](frontend/src/components/dashboard/Users.tsx) - User search and list

### Backend

- [`auth.ts`](backend/src/middleware/auth.ts) - JWT verification middleware
- [`user.controller.ts`](backend/src/api/user/user.controller.ts) - User business logic
- [`account.controller.ts`](backend/src/api/account/account.controller.ts) - Account operations

## 🔐 Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Protected routes on frontend and backend
- MongoDB transactions for money transfers
- Input validation with Zod
- CORS configuration

## 🧪 Testing

```bash
# Run backend tests (if configured)
cd backend
npm test

# Run frontend tests (if configured)
cd frontend
npm test
```

## 📦 Building for Production

### Backend

```bash
cd backend
npm start
```

### Frontend

```bash
cd frontend
npm run build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Shivansh Tiwari

## 🙏 Acknowledgments

- Inspired by Paytm's digital wallet system
- Built as a learning project for full-stack development
