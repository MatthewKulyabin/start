import React from 'react';

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
  console.log(isAuth);
  return !isAuth || isAuth === 'false' ? (
    <button className="btn btn-primary" onClick={onLogin}>
      Log In
    </button>
  ) : (
    <button className="btn btn-primary" onClick={onLogOut}>
      Log Out
    </button>
  );
};

export default SimpleComponent;
