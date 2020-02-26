import React from 'react';

const UseRef = () => {
  const myRef = React.useRef();
  const clickHandler = () => {
    myRef.current.focus();
  };
  return (
    <div>
      <h2>UseRef</h2>
      <label htmlFor="my-input">Input:</label>
      <input type="text" id="my-input" ref={myRef}/>
      <button type="button" onClick={clickHandler}>Set Focus</button>
    </div>
  );
};

export default UseRef;
