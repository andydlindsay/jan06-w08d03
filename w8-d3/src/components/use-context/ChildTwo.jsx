import React, { useContext } from 'react';
import UserContext from './UserContext';

const ChildTwo = () => {
  const { first_name, last_name } = useContext(UserContext);
  return (
    <div>
      <h1>I'm child two!!</h1>
      <p>You are logged in as { `${first_name} ${last_name}`}</p>
    </div>
  );
};

export default ChildTwo;