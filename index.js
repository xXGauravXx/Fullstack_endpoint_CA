// a basic express app 
const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post('/signup', (req, res) => {

    const { name, email, password, DOB } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Username cannot be empty' });
    } 
    if (!email) {
        return res.status(400).json({ error: 'Email cannot be empty' });
    }
    if (!password,password.listength > 8,password.listength <= 16) {
        return res.status(400).json({ error: 'Password length should be greater than 8 or less than or equal to 16' });
    }

    res.status(200).json({ message: 'User signed up successfully' });
});

