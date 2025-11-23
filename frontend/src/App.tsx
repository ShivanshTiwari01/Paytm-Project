import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Signup } from './components/auth/Signup';
import { Signin } from './components/auth/Signin';
import { Dashboard } from './components/dashboard/Dashboard';
import { SendMoney } from './components/dashboard/SendMoney';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/send' element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
