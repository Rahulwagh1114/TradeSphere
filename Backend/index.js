require('dotenv').config({ quiet: true })
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const port=process.env.PORT || 3002;

const Holding=require("./models/holdingSchema");
const Position=require("./models/positionSchema");

async function main(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database is connected ")
    }catch(err){
        console.log(err);
    }
}
main();

const cors = require('cors');
const bodyParser=require('body-parser')
app.use(cors());
app.use(bodyParser.json());

 app.get("/allHoldings",async(req,res)=>{
 const allHoldings=await Holding.find({});
 res.json(allHoldings);
 })

 app.get("/allPositions",async(req,res)=>{
    const allPostions=await Position.find({});
    res.json(allPostions);
 })

app.listen(port,()=>{
    console.log("Server is listing");
})

  