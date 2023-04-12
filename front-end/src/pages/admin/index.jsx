import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Forms from './components/Forms';
import THead from '../checkout/components/thead';
import { getUsersComun } from '../../services/user.service';
import TableElement from './components/TableElement';
import api from '../../services/api';
import deleteUsers from '../../services/adm.services';

function Admin() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [useUsers, setUsers] = useState([]);
  const header = ['Item', 'Nome', 'E-mail', 'Tipo', 'Excluir'];

  const handleRegister = async (useForm, setNotRegister) => {
    try {
      await api.post('/register', { ...useForm }, {
        headers: {
          Authorization: user.token,
        },
      });
      setNotRegister(false);
    } catch (error) {
      setNotRegister(true);
    }
  };

  useEffect(() => {
    async function get() {
      const result = await getUsersComun();
      setUsers(result);
    }

    get();
  }, [handleRegister]);

  const remove = async (id) => {
    await deleteUsers(id, user.token);
  };

  return (
    <div>
      <NavBar />
      <Forms handleRegister={ handleRegister } />
      <h2>Lista de usuários</h2>
      <table>
        <THead header={ header } />
        <tbody>
          { useUsers.map((e, index) => (
            <TableElement
              key={ index }
              product={ { ...e, remove } }
              number={ index }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
