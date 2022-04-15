import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';

const NewRSONavbar = () => {

  const [rso_name, setRSOName] = useState([]);
  const [num_members, setNumMembers] = useState([]);


  const createEvent = async () => {
    try {
      const response = await axios.post("/events",
          JSON.stringify({rso_name, num_members}),
          {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
          }
      )
      setRSOName('');
      setNumMembers('');
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={createEvent}>
        <label htmlFor="rso_name">RSO Name:</label>
        <input 
          type="text" 
          id="rso_name"
          autocomplete="off"
          onChange={(e) => setRSOName(e.target.value)}
          value={rso_name}
          required
        />
        <label htmlFor="nim_members">RSO Number of Members:</label>
        <input 
          type="text" 
          id="num_members"
          autocomplete="off"
          onChange={(e) => setNumMembers(e.target.value)}
          value={num_members}
          required
        />
        <button type="submit" className="btn btn-success" >Create RSO</button>
      </form>
    </div>
  )
}

export default NewRSONavbar;