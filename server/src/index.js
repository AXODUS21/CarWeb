import express from "express"
import cors from 'cors' // library that allows the rules for the communication between the frontend and the backend
import mongoose from 'mongoose' // will allow you to write queries and communications to our database

import {userRouter} from "./routes/users.js"
const app = express()

app.use(express.json());
app.use(cors()); //solves issues when trying to make API request from the content
app.use("/auth", userRouter);

mongoose.connect(
  //             username   password                       put the name of the db before the question mark
  "mongodb+srv://Axellerosh:Axellerosh21@cluster0.vpdtu22.mongodb.net/recipe?retryWrites=true&w=majority"
);

app.listen(5000, () => {
    console.log("nagana na boi")
})