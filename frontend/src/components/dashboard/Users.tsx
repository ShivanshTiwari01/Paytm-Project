import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { authService } from '../../services/authService';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
}

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchUsers();
  }, [filter]);

  const fetchUsers = async () => {
    try {
      const response = await authService.filterUsers(filter);
      setUsers(response.user || []);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  return (
    <>
      <div className='font-bold mt-6 text-lg'>Users</div>
      <div className='my-2'>
        <input
          type='text'
          placeholder='Search users...'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='w-full px-2 py-1 border rounded border-slate-200'
        />
      </div>
      <div>
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }: { user: User }) {
  const navigate = useNavigate();

  return (
    <div className='flex justify-between'>
      <div className='flex'>
        <div className='rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2'>
          <div className='flex flex-col justify-center h-full text-xl'>
            {user.firstName[0]}
          </div>
        </div>
        <div className='flex flex-col justify-center h-full'>
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center h-full'>
        <Button
          label={'Send Money'}
          onClick={() => {
            navigate(`/send?id=${user._id}&name=${user.firstName}`);
          }}
        />
      </div>
    </div>
  );
}
