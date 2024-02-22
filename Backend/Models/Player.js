const mongoose = require("mongoose");
const playerSchema = mongoose.Schema({
    name : String,
    age:Number,
    position:String,
    nbre:Number,
    // un objet
    teamId:{type:mongoose.Schema.Types.ObjectId,
    ref:"Team"}
})

const player = mongoose.model("Player",playerSchema);

module.exports=player;
