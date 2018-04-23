const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! your user was registred! have fun!`
    });
});


app.listen(process.env.PORT || 8081);