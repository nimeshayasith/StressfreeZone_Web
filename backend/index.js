const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const port = 8080

app.listen(port,()=>{
    console.log(`server is running ${port}`)
})