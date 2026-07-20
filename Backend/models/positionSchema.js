const mongoose=require("mongoose");

const positionSchema=new mongoose.Schema({
  product:String,
  name:String,
    qty:Number,
    avg:Number,
    net:String,
    price:Number,
    day:String,
    isLoss:Boolean
});

const Position=mongoose.model("Position",positionSchema);
module.exports=Position;