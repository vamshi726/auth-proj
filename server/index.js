const express = require("express")

const app = express()
const port = 3002;
const users = require("./users")


const bodyParser = require('body-parser');
const User = require('./db'); 

app.use(bodyParser.json());

app.post("/signup",async (req,res)=>{

    const email = req.body.email;
    const password= req.body.password;


      // Checking is  user already exists
      try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists");
        }

        // Create a new user
        const newUser = new User({ email, password });
        await newUser.save();

        // Respond with success
        res.status(201).send("User registered successfully");
    } catch (error) {
        res.status(500).send("Server error");
    } 

})

app.post("/login",async (req,res)=>{

    const email = req.body.email;
    const password= req.body.password;
    
    try {
        // Find the user with the matching email and password
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).send("You are logged in");
        } else {
            res.status(401).send("Invalid email or password");
        }
    } catch (error) {
        res.status(500).send("Server error");
    }
})

 
app.listen(port,()=>{
    console.log("Server running on port"+port);
})