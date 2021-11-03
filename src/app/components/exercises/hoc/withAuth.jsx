import React, { useState } from 'react';
import CardWrapper from '../../common/Card';

const withAuth = (Component) => (props) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('auth'));

  const onLogin = () => {
    localStorage.setItem('auth', true);
    setIsAuth(localStorage.getItem('auth'));
  };

  const onLogOut = () => {
    localStorage.setItem('auth', false);
    setIsAuth(localStorage.getItem('auth'));
  };

  return (
    <CardWrapper>
      <Component {...props} {...{ isAuth, onLogin, onLogOut }} />
    </CardWrapper>
  );
};

export default withAuth;
