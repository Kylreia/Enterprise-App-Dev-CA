import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Item } from "./models/item_Model.js";
import itemRoute from "./routes/itemRoute.js";
import cors from "cors";

const app = express();

// Middleware for pasing request body
app.use(express.json());

// Middleware for handling CORS Policy
// Option 1: Allow all origins w/ default of cors
app.use(cors());

// Option 2: Allow custom origins
// app.use(
//     cors({
//         origin: 'http://localhost:5555',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome To Microservice Tester')
});

app.use('/items', itemRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });