import { Appbar } from './Appbar';
import { Balance } from './Balance';
import { Users } from './Users';

export const Dashboard = () => {
  return (
    <div className='mx-8 my-2'>
      <Appbar />
      <Users />
      <Balance />
    </div>
  );
};
