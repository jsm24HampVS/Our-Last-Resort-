const express = require("express");
const path = require("path");

const app = express();

// Railway chooses the port when deployed.
// Locally, the website will still use port 3000.
const PORT = process.env.PORT || 3000;

// Tell Express exactly where the public folder is.
app.use(express.static(path.join(__dirname, "public")));

// Tell Express to use EJS.
app.set("view engine", "ejs");

// Tell Express exactly where the views folder is.
app.set("views", path.join(__dirname, "views"));

// Homepage
app.get("/", (req, res) => {
    res.render("index");
});

// Questionnaire
app.get("/match", (req, res) => {
    res.render("match");
});

// Loading screen
app.get("/loading", (req, res) => {
    res.render("loading");
});

// Results page
app.get("/results", (req, res) => {
    res.render("results");
});

// Start the server.
// 0.0.0.0 allows Railway to reach the application.
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});