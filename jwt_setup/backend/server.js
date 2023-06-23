
const express = require('express');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
dotenv.config(); 


// now I can use process.env.VARIABLE_NAME
// when my server starts, I want to connect to my database
// connect to myapp database
require('./config/database.js')
const User = require('./Models/User.js')

const app = express();
app.use(express.json());

const verifyToken = (req, res, next) => {
    // when we send the token from the frontend
    const encodedToken = req.header('Authorization');
    if (!encodedToken) {
        res.status(401).json({message: "access denied - not logged in"})
    }

    try {
        // if good token, allow route use
        // if not good token, res.status 400 don't allow route use
        const decoded = jwt.verify(encodedToken, process.env.TOKEN_SECRET);
        console.log(decoded);
        next()
   
    } catch (err) {
        res.status(401).json({message: "access denied - not logged in"})

    }
    // decode token

}

app.post('/users', async (req, res) => {
    let userData = req.body;
    // use normal password to create crazy password
    // salting is part of making the password crazy
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(userData.password, salt)
    // change the userData.password = crazy password
    userData.password = hashedPassword;
    let response = await User.create(userData);
    if (response) {
        res.send("user created");
    } else {
        res.send("problem creating user");
    }
    
});

app.post('/users/login', async (req, res) => {
    console.log("hitting route");
    // object with email and password they typed in
    let userInputs = req.body;
    // look for the user with the email
    let userFromDB = await User.findOne({ email: userInputs.email});
    const passwordsMatch = await bcrypt.compare(userInputs.password, userFromDB.password);
    // check the passwords
    delete userFromDB.password;
    // create a web token for the user
    if (passwordsMatch) {
        const token = jwt.sign({userFromDB}, process.env.TOKEN_SECRET, { expiresIn: "3h" });
        res.send(token);
    } else {
        res.send("incorrect login information")
    }

})


app.get('/users/friends', verifyToken, async (req, res) => {
    res.send("You got in the route");
})

app.listen(4001, () => {
    console.log("listening on 4001")
})
