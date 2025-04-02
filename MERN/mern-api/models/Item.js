const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name:{type:String,require:true},
    description:{type:String},
});

const Item = mongoose.model("Item",itemSchema);

module.export = Item;