const express = require('express');

const app = express();

const errorHandler = require('./Middleware/errorHandler');

const dotenv = require('dotenv');
app.use(express.json());
const port = process.env.PORT ||  3003;

app.use("/" ,require("./Routes/contactRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
