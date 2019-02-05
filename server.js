const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

app.listen(PORT, () => console.log(`app listening on PORT ${PORT}!`))