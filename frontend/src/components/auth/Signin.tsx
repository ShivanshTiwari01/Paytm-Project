import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomWarning from '../ui/BottomWarning';
import { Button } from '../ui/Button';
import { Heading } from '../ui/Heading';
import { InputBox } from '../ui/InputBox';
import { SubHeading } from '../ui/SubHeading';
import { authService } from '../../services/authService';

export const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await authService.signin(formData);

      if (response.success) {
        localStorage.setItem('token', response.token);
        navigate('/dashboard');
      } else {
        setError(response.message);
      }
    } catch (err: Error) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={'Sign in'} />
          <SubHeading label={'Please enter your credentials to Log In'} />

          {error && <div className='text-red-500 text-sm mb-2'>{error}</div>}

          <InputBox
            placeholder={'John@gmail.com'}
            label={'Email'}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <InputBox
            placeholder={'password'}
            label={'Password'}
            type='password'
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <div className='pt-4'>
            <Button
              label={loading ? 'Signing in...' : 'Sign in'}
              onClick={handleSubmit}
            />
          </div>

          <BottomWarning
            label={'Dont have an account?'}
            buttonText={'Sign up'}
            to={'/signup'}
          />
        </div>
      </div>
    </div>
  );
};
