const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
const dns = require("node:dns/promises");
const express = require('express');
const userRoutes = require('./routes/users');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:5173']
}));

app.use(express.json());
//connect to MongoDB atlas
async function connectToDb() {
    try{
        console.log(await dns.getServers());
        dns.setServers(["1.1.1.1"]);
        await mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connected to MongoDB")).catch(err => console.log(err));
        
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
    
}
connectToDb();
app.use("/", express.static(path.join(__dirname, "dist")));
app.use("/", userRoutes);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

