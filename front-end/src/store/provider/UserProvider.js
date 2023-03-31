import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';
import sendLogin from '../../services/user.services';

export default function UserProvider({ children }) {
  const [userLogin, setUserLogin] = useState({
    name: '',
    email: '',
    role: '',
  });

  async function loginUser(email, password) {
    try {
      const { user } = await sendLogin(email, password);
      const dataUser = user.dataValues;

      console.log(dataUser);
      setUserLogin({ ...dataUser });

      return dataUser;
    } catch (error) {
      console.log('User not found');
    }
  }

  const context = useMemo(() => ({
    userLogin,
    setUserLogin,
    loginUser,
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
