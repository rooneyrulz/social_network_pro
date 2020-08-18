import React, { useState } from 'react';

import AuthContext from '../contexts/AuthContext';

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => setAuthenticated((prev) => true);

  return (
    <AuthContext.Provider value={'Hello World..'}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
