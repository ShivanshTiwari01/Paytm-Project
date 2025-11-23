import { useNavigate } from 'react-router-dom';

export const Appbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <div className='shadow h-14 flex justify-between'>
      <div className='flex flex-col justify-center h-full ml-4'>Paytm App</div>
      <div className='flex'>
        <div className='flex flex-col justify-center h-full mr-4'>Hello</div>
        <div className='rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2'>
          <div className='flex flex-col justify-center h-full text-xl'>U</div>
        </div>
        <button
          onClick={handleLogout}
          className='text-sm text-red-500 hover:text-red-700 mr-4'
        >
          Logout
        </button>
      </div>
    </div>
  );
};
