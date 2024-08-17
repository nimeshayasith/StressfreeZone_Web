const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://learning-a7662-default-rtdb.firebaseio.com"
});

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post("/api/register", async (req, res) => {
    try {
      const { email, name, password } = req.body;
      // Optionally, handle additional backend logic here
      res.status(200).send("User registered successfully");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
  app.post("/api/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      // Optionally, handle additional backend logic here
      res.status(200).send("User logged in successfully");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
  app.post("/api/login-google", async (req, res) => {
    try {
      const { email, name } = req.body;
      // Optionally, handle additional backend logic here
      res.status(200).send("User logged in with Google successfully");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

const port = 5000

app.listen(port,()=>{
    console.log(`server is running ${port}`)
})