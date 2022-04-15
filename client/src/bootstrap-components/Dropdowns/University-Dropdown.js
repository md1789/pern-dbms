import React, {useEffect, useState} from 'react';
import axios from '../../api/axios';

const UniversityDropdown = () => {

    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        getUniverities();
    }, []);

    const getUniverities = async () => {
        try {
            const response = await axios.get("/superadmin",
                JSON.stringify({ universities}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(response);
            const jsonData = response?.data;

            setUniversities(jsonData);

        } catch (error) {
            console.error(error.message);
        }
    }
    
    return (
    <div className="dropdown">
        <select className="form-select">
            { universities.map(id => (
                <option value={id.university_name}>{id.university_name}</option>
            ))}
        </select>
    </div>
    )
}

export default UniversityDropdown;