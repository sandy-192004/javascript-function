const express = require("express");
const api = express();
const users = require("./userRoute");
const MongoDB = require("./UserDB");
const authMiddleware = require("../middleware/Authentication.js");


MongoDB();
port = 3000;
//middlewares
api.use(express.json());
app.use(authMiddleware); 

api.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`Time: ${timestamp} | Method: ${req.method} `);
  next(); 
});


api.get('/' ,(req,res) => {
    res.json({msg: "hello world!"});
})
api.use("/api", users);
api.listen(port, (err) => {
    console.log(`server runs on http://localhost:${port}`);
});