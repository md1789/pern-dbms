const pool = require("./db");
const express = require("express");
const app = express();
const path = __dirname + '//html';
const cors = require("cors");
const bodyParser = require("body-parser");
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3000;
const authController = require('./controllers/authController');
const registerController = require('./controllers/registerController');
// middleware: functions that have access to the request object and response object and the next function in the request-response cycle
app.use(logger);
app.use(express.static(path));
const corsCred = app.use(cors({credentials: true, origin: 'http://localhost:3001'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
});

app.options('*', cors())
// routes
app.post('/login', authController.handleLogin);
app.post('/users', registerController.handleNewUser);

// create a user
app.post('/users', async(req, res) => {
    try {
        console.log(req.body);
        const newUser = await pool.query('INSERT INTO users (username, password, university_name) VALUES ($1, $2, $3)', [username, password, university_name]);
        res.json(newUser.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

// add events to user
app.post('/userevents', async(req, res) => {
    try {
        console.log(req.body);
        const newUserEvent = await pool.query('INSERT INTO user_event (username, event_name) VALUES ($1, $2)', [username, event_name]);
        res.json(newUserEvent.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

// add rso
app.post('/rsos', async(req, res) => {
    try {
        console.log(req.body);
        const newRSO = await pool.query('INSERT INTO rso (name, address) VALUES ($1, $2)', [name, address]);
        res.json(newRSO.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

app.get('/rsos', async(req, res) => {
    try {
       const allRSOs = await pool.query('SELECT * FROM rso');
       res.json(allRSOs.rows); 
    } catch (error) {
        console.error(error.message);
    }
});

// get user events
app.get('/userevents', async(req, res) => {
    try {
       const allUserEvents = await pool.query('SELECT * FROM user_event');
       res.json(allUserEvents.rows); 
    } catch (error) {
        console.error(error.message);
    }
});

// get a user
app.get('/users/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        res.json(user.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// create a university
app.post('/universities', async(req, res) => {
    try {
        console.log(req.body);
        const newUniversity = await pool.query('INSERT INTO university (university_name, address) VALUES ($1, $2)', [university_name, address]);
        res.json(newUniversity.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

// get universities
app.get('/universities', async(req, res) => {
    try {
       const allUniversities = await pool.query('SELECT * FROM university');
       res.json(allUniversities.rows); 
    } catch (error) {
        console.error(error.message);
    }
});

// post events
app.post('/events', async(req, res) => {
    try {
       console.log(req.body); 
       const newEvent =  await pool.query('INSERT INTO events (event_name, name, category, "time", description, location, phone, email, date, rating_stars) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)', 
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
        const event = await pool.query('SELECT * FROM events WHERE event_name = $1', [event_name]);
        res.json(event.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// update an event
app.put('/events/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { name, category, description, time, date, location, phone, email } = req.body;
        const updateEvent = await pool.query('UPDATE events SET name = $1, category = $2, description = $3, time = $4, date = $5, location = $6, phone = $7, email = $8 WHERE event_name = $9', 
        [name, category, description, time, date, location, phone, email, event_name]);
        res.json('Events are updated')
    } catch (error) {
        console.error(error.message);
    }
});

//delete an event
app.delete('/events/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const deleteEvent = await pool.query('DELETE FROM events WHERE name = $1',
        [event_name]);
        res.json('Event was deleted');
    } catch (error) {
        console.error(error.message);
    }
})

app.use(errorHandler);

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});

