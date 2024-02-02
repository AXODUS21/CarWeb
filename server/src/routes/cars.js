import express from "express"
import mongoose from "mongoose";
import { CarModel } from "../models/Cars.js";
import { UserModel } from "../models/Users.js";

const router = express.Router()

 //returns all of the things inside the "cars" data base
router.get("/", async (req,res) => {
    try {
        // if you navigate to the ../models/Cars.js you will see that CarModel represents a database
        const response = await CarModel.find({})
        res.json(response)
    }catch (err){
        console.log(err)
    }
});

router.post("/", async (req,res) => {
    const car = new CarModel(req.body);
    try {
        const response = await car.save()
        res.json(response)
    }catch (err){
        console.log(err)
    }
});
//THIS ROUTES ABLES US TO PUT IN THE 
router.put("/save", async (req,res) => {
    
    try {
        const car = await RecipeModel.findById(req.body.carID);
        const user = await UserModel.findById(req.body.userID);
        user.savedCars.push(car)
        await user.save()
        res.json({savedCars: user.savedCars})
    }catch (err){
        console.log(err)
    }
});

router.get("/savedCars", async (req,res) => {
    try{
        const user = await UserModel.findById(req.body.userID)
        const savedCars = await CarModel.find({
            _id: {$in: user.savedCars}
        })
        res.json({savedCars})
    }catch (err) {
        console.log(err)
    }
})



export {router as carRouter}