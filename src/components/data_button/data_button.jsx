
import './Data_Button.css';
import axios from 'axios';
import React, {useState} from "react";

export default function Data_Button() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5050/api/data');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="button-container">
            <button onClick={fetchData}>Display Data</button>
            <ul>
                {data.map((item) => (
                    <li key={item._id}>
                        {item.url}: {item.html}
                    </li>
                ))}
            </ul>
        </div>
    );
}