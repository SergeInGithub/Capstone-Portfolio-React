import React, { useState } from 'react';
import { Login, Signup } from '../components';

export const AuthPage = () => {
  const [regular, setRegular] = useState(true);

  // toggle between login and sign up
  const toggleAuthState = () => {
    setRegular(!regular);
  };

  return (
    <div>
      <div>
        {/* conditionally render the login or sign up component */}
        {regular ? (
          <Login handleClick={toggleAuthState} />
        ) : (
          <Signup handleClick={toggleAuthState} />
        )}
      </div>
    </div>
  );
};
