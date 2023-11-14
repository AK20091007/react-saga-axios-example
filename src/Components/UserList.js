// UserList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUserDetails from '../Redux/Actions'
import './Styles/userList.css'
import Card from './Card';

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    if(users.length === 0){
      dispatch(getUserDetails('GB', 10));
    }
  }, [dispatch]);

  return (
    <div>
      <h1 className='heading'>List of Users</h1>
      {users.length > 0 && (
        <div className='card-container'>
          {users.map((user) => (
            <Card user = {user}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
