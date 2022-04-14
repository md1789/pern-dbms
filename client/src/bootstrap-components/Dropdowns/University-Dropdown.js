import React, {useEffect, useState} from 'react';
import axios from '../../api/axios';

const UniversityDropdown = () => {

    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        getUniverities();
    }, []);

    const getUniverities = async () => {
        try {
            const response = await axios.get("/universities",
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
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Choose University
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            { universities.map(id => (
                <option value={id.university_name}>{id.university_name}</option>
            ))}
        </div>
    </div>
    )
}

export default UniversityDropdown;