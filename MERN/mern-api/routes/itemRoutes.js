const express = require("express");
const Item = require("../models/Item")

const router = express.Router();


router.post("/items", async (req , res) =>{
    try{
        const newItem = new Item(req,body);
        await newItem.save();
        res.status(201).json((newItem));
    }catch(error){
        res.status(400).json({error:error.message})
    }
});


j



router.get("/items", async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;