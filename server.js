const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// get method to listen for api's..  arrow function

// we will use app.use for every api's..
//app.use is middleaware..
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`server running on ${port}`);
});


