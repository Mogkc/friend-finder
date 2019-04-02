const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// non-sensitive files can be shared statically from the public folder
app.use(express.static('public'));

// Routing is handled in other files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Takes in requests and sends to the appropriate route.
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  