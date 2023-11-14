// UserList.js
import React from 'react';
import './Styles/Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ user }) => {
    const navigate = useNavigate();

    const handelOnclick = () =>{
        navigate('/details', { state: user });
    }
    return (
        <div className="card" onClick={handelOnclick}>
            <div className="horizontal_center" id="user_photo">
                <img src={user.picture.large} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                <p>ID (NINO): {user.id.value}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Address: {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}`}</p>
            </div>
        </div>
    );
};

export default Card;
