import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';

const NewuniversityNavbar = () => {

  const [universityName, setUniversityName] = useState('');
  const [universityAddress, setUniversityAddress] = useState();

  const createuniversity = async () => {
    try {
      const response = await axios.post("/superadmin",
          JSON.stringify({universityName, universityAddress}),
          {
              headers: { 'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': 'http://localhost:3000'},
              withCredentials: true,
              
          }
      )
      setUniversityName('');
      setUniversityAddress('');
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <input 
          type="text" 
          id="universityname"
          autocomplete="off"
          onChange={(e) => setUniversityName(e.target.value)}
          required
        />
        <input 
          type="text" 
          id="universityAddress"
          autoComplete="off"
          onChange={(e) => setUniversityAddress(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success" onClick={createuniversity}>Create university</button>
      </nav>
    </div>
  )
}

export default NewuniversityNavbar;