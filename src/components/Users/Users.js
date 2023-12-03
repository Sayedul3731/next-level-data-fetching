"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h1>Users: {users.length} </h1>
            {
                users.map(user => <div key={user.id} className="card w-[70%] my-5 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{user.name}</h2>
                  <p>{user.username}</p>
                  <p> <span className="font-serif font-semibold">Email:</span> {user.email}</p>
                </div>
              </div>)
            }
        </div>
    );
};

export default Users;