const mongoose = require ("mongoose");

const teamSchema = mongoose.Schema({
name :String,
stadium :String,
owner:String,
foundation:Number,
// un tableau 
players: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Player",
    }]
});

const team = mongoose.model("Team",teamSchema);

module.exports=team;