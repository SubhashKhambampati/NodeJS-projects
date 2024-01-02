const express = require('express');

const app = express();

const connectDb = require('./config/dbConnection');

const userRoutes = require("./Routes/userRoutes");

connectDb();

const errorHandler = require('./Middleware/errorHandler');

const dotenv = require('dotenv');
app.use(express.json());
const port = process.env.PORT ||  3003;

app.use("/" ,require("./Routes/contactRoutes"));

app.use("/users" ,require("./Routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
