const express = require('express');
const app = express();

// Authentication routes
const auth_routes = require('./routes/auth');
const user_routes = require('./routes/users');

app.use(express.json());
app.use('/api', auth_routes);
app.use('/api/users', user_routes);

app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server running at 5000');
    }
});