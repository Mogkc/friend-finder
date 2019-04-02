// For correct relative paths
const path = require("path");

module.exports = (app) => {
    // These routes directly send files

    app.get("/home", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    app.get("/survey", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
    // If no matching route is found default to home
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };
  