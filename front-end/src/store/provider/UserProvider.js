import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';
import sendLogin from '../../services/user.services';

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: '',
  });

  async function loginUser(email, password) {
    try {
      const { user } = await sendLogin(email, password);
      const dataUser = user.dataValues;

      setUser({ ...dataUser });

      return dataUser;
    } catch (error) {
      console.log('User not found');
    }
  }

  const context = {
    user,
    setUser,
    loginUser,
  };

  return (
    <UserContext.Provider value={ context }>
      { children }
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
