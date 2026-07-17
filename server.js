const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// get method to listen for api's..  arrow function
app.get('/api/contacts', (req, res) => {
    res.send("Get all the contacts");
})


app.listen(port, () => {
    console.log(`server running on ${port}`);
});

