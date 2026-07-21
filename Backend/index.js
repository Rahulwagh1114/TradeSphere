require('dotenv').config({ quiet: true })
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const port=process.env.PORT || 3002;

const passport = require("passport");
const jwt = require("jsonwebtoken");
require("dotenv").config();
require("./config/passport");     // local strategy
require("./config/passportJwt");  // jwt strategy
app.use(passport.initialize());   // session:false use kar rahe hain, isliye passport.session() ki zaroorat nahi

const Holding=require("./models/holdingSchema");
const Position=require("./models/positionSchema");
const Order=require("./models/orderSchema");
const User=require("./models/user");

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

 app.post("/newOrder",async(req,res)=>{
    let newOrder= new Order({
         name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
    });
    newOrder.save();
    res.send("order is saved");
 })

 app.post("/signup", async (req, res) => {
   try{ 
    let {email,mobile,pan,username,password}=req.body;
    const newUser= new User({email,mobile,pan,username});
    const registeredUser= await User.register(newUser,password);
    return res.status(201).json({ message: "User registered", username: registeredUser.username });
   }catch(err){
    console.log(err);
    return res.status(500).json({ error: err.message });
   }
})

app.listen(port,()=>{
    console.log("Server is listing");
})

app.post("/login", passport.authenticate("local", { session: false }),  // session false kyunki hum JWT use karenge
(req,res)=>{
      const token = jwt.sign(
            { _id: req.user._id, username: req.user.username},
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
         res.json({ message: "Login successful", token });
})

  