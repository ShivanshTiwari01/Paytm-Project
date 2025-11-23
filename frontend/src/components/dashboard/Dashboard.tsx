import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Appbar } from './Appbar';
import { Balance } from './Balance';
import { Users } from './Users';
import { accountService } from '../../services/accountService';

export const Dashboard = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
      return;
    }

    fetchBalance();
  }, []);

  const fetchBalance = async () => {
    try {
      const response = await accountService.getBalance();
      if (response.success) {
        setBalance(response.balance);
      }
    } catch (error) {
      console.error('Failed to fetch balance:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        Loading...
      </div>
    );
  }

  return (
    <div className='mx-8 my-2'>
      <Appbar />
      <Balance value={balance} />
      <Users />
    </div>
  );
};
