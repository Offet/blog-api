//  import the express module
import express from "express";
// import dotenv to enable your .env file to work 
import "dotenv/config";
// console.log(process.env);

// importing the dbConnection created
import { dbConnection } from "./config/db.js";

// import blogRouter (add .js)
import blogRouter from "./router/router_blog.js";

// Instantiate express
const app = express();

// Apply middleware
app.use(express.json());
app.use(blogRouter);

//  instantiate the dbConnection
dbConnection();

// Create port
const port = process.env.PORT || 2600;

// Listen to server at port for incoming requests
app.listen(port, () => {
    console.log(`Blog is listening at port ${port}!`);
});




