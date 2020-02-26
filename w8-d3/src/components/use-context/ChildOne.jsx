import React, { useContext } from 'react';
import UserContext from './UserContext';

const ChildOne = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>I'm child one!!</h1>
      <h2>Hello there {user.first_name }</h2>
    </div>
  );
};

export default ChildOne;
