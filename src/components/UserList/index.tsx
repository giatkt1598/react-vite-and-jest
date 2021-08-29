import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { User } from '../../models/User';
import { getUsersAsync } from '../../services/userService';

/**
 * List user fetch from API
 */
export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        getUsersAsync()
            .then(result => {
                result.forEach((e) => {
                    setUsers(prev => [...prev, { id: e.id, name: e.name }]);
                });
            });
        return () => {
            setUsers([]);
        }
    }, []);
    return (
        <ol>
            {
                users.map(u => <li key={u.id}>{u.name}</li>)
            }
        </ol>
    )
}
