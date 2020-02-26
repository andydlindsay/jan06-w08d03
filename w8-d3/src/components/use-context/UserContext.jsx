import { createContext } from 'react';

const UserContext = createContext({
  first_name: 'Alice',
  last_name: 'Cooper'
});

export default UserContext;
