const pool = require("./db");
const express = require("express");
const app = express();
const path = __dirname + '//html';
const cors = require("cors");
const bodyParser = require("body-parser");
const corsOptions = 'http:localhost:3000';
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3000;
// middleware: functions that have access to the request object and response object and the next function in the request-response cycle
app.use(logger);
app.use(express.static(path));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
});

// routes
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));


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

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'html', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});

