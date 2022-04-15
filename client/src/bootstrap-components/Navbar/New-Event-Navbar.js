import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';

const NewEventNavbar = () => {

  const [event_name, setevent_name] = useState([]);
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [university_name, setuniversity_name] = useState([]);
  const [category, setcategory] = useState([]);
  const [location, setlocation] = useState([]);
  const [time, settime] = useState([]);
  const [date, setdate] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);
  const [rating_stars, setrating_stars] = useState([]);

  const createEvent = async () => {
    try {
      const response = await axios.post("/events",
          JSON.stringify({event_name, category, time, description, location, phone, email, date, rating_stars, university_name, name}),
          {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
          }
      )
      setevent_name('');
      setName('');
      setcategory('');
      setlocation('');
      settime('');
      setDescription('');
      setPhone('');
      setEmail('');
      setuniversity_name('');
      setdate('');
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={createEvent}>
        <label htmlFor="event_name">Event ID:</label>
        <input 
          type="text" 
          id="event_name"
          autocomplete="off"
          onChange={(e) => setevent_name(e.target.value)}
          value={event_name}
          required
        />
        <label htmlFor="category">Event Category:</label>
        <input 
          type="text" 
          id="category"
          autocomplete="off"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
          required
        />
        <label htmlFor="time">Event Time:</label>
        <input 
          type="text" 
          id="time"
          autocomplete="off"
          onChange={(e) => settime(e.target.value)}
          value={time}
          required
        />
        <label htmlFor="description">Event Description:</label>
        <input 
          type="text" 
          id="description"
          autocomplete="off"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <label htmlFor="location">Event Location:</label>
        <input 
          type="text" 
          id="location"
          autocomplete="off"
          onChange={(e) => setlocation(e.target.value)}
          value={location}
          required
        />
        <label htmlFor="phone">Event Phone:</label>
        <input 
          type="text" 
          id="phone"
          autocomplete="off"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />
        <label htmlFor="email">Event Email:</label>
        <input 
          type="text" 
          id="email"
          autocomplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor="date">Event Date:</label>
        <input 
          type="text" 
          id="date"
          autocomplete="off"
          onChange={(e) => setdate(e.target.value)}
          value={date}
          required
        />
        <label htmlFor="rating">Event Rating:</label>
        <input 
          type="text" 
          id="rating"
          autocomplete="off"
          onChange={(e) => setrating_stars(e.target.value)}
          value={rating_stars}
          required
        />
        <label htmlFor="university">University:</label>
        <input 
          type="text" 
          id="university"
          autocomplete="off"
          onChange={(e) => setuniversity_name(e.target.value)}
          value={university_name}
          required
        />
        <label htmlFor="name">Event Name:</label>
        <input 
          type="text" 
          id="name"
          autocomplete="off"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <button type="submit" className="btn btn-success" >Create Event</button>
      </form>
    </div>
  )
}

export default NewEventNavbar;