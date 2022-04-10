const pool = require('../../server/db');
const express = require('express');
const app = express();
const cors = require('cors');

// middleware: functions that have access to the request object and response object and the next function in the request-response cycle
app.use(cors());
app.use(express.json());

// Routes
// post events
app.post('/events', async(req, res) => {
    try {
       console.log(req.body); 
       const newEvent =  await pool.query('INSERT INTO events (name, category, description, time, date, location, phone, email) VALUES($1, $2, $3, $4, $5, $6, $7, $8)', 
       [name, category, description, time, date, location, phone, email]);
       res.json(newEvent.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// get events
app.get('/events', async(req, res) => {
    try {
       const allEvents = await pool.query('SELECT * FROM events');
       res.json(allEvents.rows); 
    } catch (error) {
        console.error(error.message);
    }
});

// get an event
app.get('/events/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const event = await pool.query('SELECT * FROM events WHERE name = $1', [event_name]);
        res.json(event.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// update an event
app.put('/todos/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { name, category, description, time, date, location, phone, email } = req.body;
        const updateEvent = await pool.query('UPDATE events SET name = $1, category = $2, description = $3, time = $4, date = $5, location = $6, phone = $7, email = $8 WHERE name = $9', 
        [name, category, description, time, date, location, phone, email, event_name]);
        res.json('Events are updated')
    } catch (error) {
        console.error(error.message);
    }
});

//delete an event
app.delete('/todos/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const deleteEvent = await pool.query('DELETE FROM events WHERE name = $1',
        [event_name]);
        res.json('Event was deleted');
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(5000, () => {
    console.log('listening on port 5000');
});