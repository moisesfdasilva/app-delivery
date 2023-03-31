import React, { useState } from 'react';
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
      setUser({ ...dataUser });

      return dataUser;
    } catch (error) {
      console.log('User not found');
    }
  }

  const UseMemo = (context) => {
    const cachedValue = useMemo(() => context, [context]);
    return cachedValue;
  };
  const context = {
    userLogin,
    setUserLogin,
    loginUser,
  };

  return (
    <UserContext.Provider value={ UseMemo(context) }>
      { children }
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
