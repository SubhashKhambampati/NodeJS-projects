const express = require('express');

const app = express();

const dotenv = require('dotenv');

const port = process.env.PORT ||  3001;

app.use("/" ,require("./Routes/contactRoutes"));

app.listen(port, () => console.log(`Server running on port ${port}`));
