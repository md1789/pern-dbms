import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';

const NewuniversityNavbar = () => {

  const [university_name, setUniversityName] = useState('');
  const [address, setUniversityAddress] = useState();

  useEffect(() => {
    createUniversity();
  }, [university_name, address])

  const createUniversity = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/superadmin",
          JSON.stringify({university_name, address}),
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
      <form onSubmit={createUniversity}>
      <label htmlFor="university_name">University Name:</label>
        <input 
          type="text" 
          id="university_name"
          autocomplete="off"
          onChange={(e) => setUniversityName(e.target.value)}
          value={university_name}
          required
        />
        <label htmlFor="address">Address:</label>
        <input 
          type="text" 
          id="address"
          autoComplete="off"
          onChange={(e) => setUniversityAddress(e.target.value)}
          value={address}
          required
        />
        <button type="submit" className="btn btn-success">Create university</button>
      </form>
    </div>
  )
}

export default NewuniversityNavbar;