
import './Data_Button.css';
import axios from 'axios';
import React, {useState} from "react";

export default function Data_Button() {
    const [users, setUsers] = useState([]);
    const fetchData = () => {
        axios.get('http://localhost:5050/getUsers')
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(err => console.log(err));
    };
    return (
        <div>
            <div className="button-container">
                <button onClick={fetchData}>Display Data</button>
            </div>
            <div className="table-container">
                {users.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Handle</th>
                                <th>Password</th>
                                <th>Birthday</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>{user.username}</td>
                                    <td>{user.handle}</td>
                                    <td>{user.password}</td>
                                    <td>{user.birthday}</td>
                                    
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}