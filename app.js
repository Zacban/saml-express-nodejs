const express = require("express");
const app = express();

// Get the port number from environment variables or command-line arguments, with a default of 3000
const port = process.env.PORT || process.argv[2] || 3000;

// Route to handle SAML Assertion consumption
app.get("/saml-consumer", (req, res) => {
  res.send(`
        <!doctype html>
        <html>
            <title>SAML Response Handler</title>
            <body>
                <h2>Successfully consumed the SAML Assertion</h2>
            </body>
        </html>
    `);
});

// Route to handle SAML Assertion consumption via POST
app.post("/saml-consumer", (req, res) => {
  // You can process the POST data here, e.g., req.body for form data
  console.log(req.body); // Log the received data for debugging
  res.send(`
        <!doctype html>
        <html>
            <title>SAML Response Handler</title>
            <body>
                <h2>Successfully consumed the SAML Assertion (POST)</h2>
            </body>
        </html>
    `);
});

// Route to handle SAML Logout response
app.get("/saml-logout", (req, res) => {
  res.send(`
        <!doctype html>
        <html>
            <title>SAML Logout Handler</title>
            <body>
                <h2>Successfully consumed the Logout Response</h2>
            </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
