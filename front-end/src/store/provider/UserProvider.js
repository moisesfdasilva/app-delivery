import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';

export default function UserProvider({ children }) {
  const [userLogin, setUserLogin] = useState({
    name: '',
    email: '',
    role: '',
  });

  const context = useMemo(() => ({
    userLogin,
    setUserLogin,
  }), [userLogin, setUserLogin]);

  return (
    <UserContext.Provider value={ context }>
      { children }
    </UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
