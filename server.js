
// Import the express module
const express = require('express');

// Initialize an express app
const app = express();

// Declare a constant listening port value
const port = 3000;

// Create a default route for a get req to the '/' endpoint
app.get("/", (req, res) => {
  res.send("Default GET '/' endpoint");
});
// Handler for a GET request to /user/id where id will vary
app.get('/user/:id', (req, res) => {
    res.send('user ' + req.params.id);
});
// Create a new GET handler for /user route
app.get("/user?", function (req, res) {
    if(req.query.params) {
        res.send("Received GET for /user route with query params: " + req.query.params);
    } else {
        res.send("Received GET for /user route");
    }
});
// Create a new POST handler for /user route
app.post("/user", (req, res) => {
    res.send("Received POST for /user route");
});

// Create a new DELETE handler for /user route
app.delete("/user", (req, res) => {
    res.send("Received DELETE for /user route");
});

// Tell the express application to listen on chosen port with a start-up callback 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});






