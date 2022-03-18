//console.log("hello");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 1337; // very needed here

app.use(express.static('client'))

// middleware for json
app.use(express.json()); //for json

// serve frontend
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("App is running on port " + PORT);
});