import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { Signup } from './components/auth/Signup';
import { Signin } from './components/auth/Signin';
import { Dashboard } from './components/dashboard/Dashboard';
import { SendMoney } from './components/dashboard/SendMoney';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  return token ? <>{children}</> : <Navigate to='/signin' />;
};

const RootRedirect = () => {
  const token = localStorage.getItem('token');
  return token ? <Navigate to='/dashboard' /> : <Navigate to='/signup' />;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootRedirect />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/send'
            element={
              <ProtectedRoute>
                <SendMoney />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
