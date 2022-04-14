import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';

const NewEventNavbar = () => {

  const [eventName, setEventName] = useState([]);
  const [eventCategory, setEventCategory] = useState([]);
  const [eventLocation, setEventLocation] = useState([]);
  const [eventTime, setEventTime] = useState([]);
  const [eventDate, setEventDate] = useState([]);

  const createEvent = async () => {
    try {
      const response = await axios.post("/events",
          JSON.stringify({eventName, eventCategory, eventLocation, eventTime, eventDate}),
          {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
          }
      )
      setEventName('');
      setEventCategory('');
      setEventLocation('');
      setEventTime('');
      setEventDate('');
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
          id="eventname"
          autocomplete="off"
          onChange={(e) => setEventName(e.target.value)}
          required
        />
        <input 
          type="text" 
          id="eventcategory"
          autocomplete="off"
          onChange={(e) => setEventCategory(e.target.value)}
          required
        />
        <input 
          type="text" 
          id="eventlocation"
          autocomplete="off"
          onChange={(e) => setEventLocation(e.target.value)}
          required
        />
        <input 
          type="text" 
          id="eventtime"
          autocomplete="off"
          onChange={(e) => setEventTime(e.target.value)}
          required
        />
        <input 
          type="text" 
          id="eventdate"
          autocomplete="off"
          onChange={(e) => setEventDate(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success" >Create Event<FontAwesomeIcon icon="fa-solid fa-plus" /></button>
      </nav>
    </div>
  )
}

export default NewEventNavbar;