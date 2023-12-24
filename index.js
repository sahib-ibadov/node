const express = require("express")
// const { v4: uuidv4 } = require('uuid');
const moment = require("moment")
const blogRoutes=require("./routes/blog.routes")
const app = express()
const PORT = 5000
app.use(express.json())


app.use("/blog",blogRoutes)




app.listen(PORT, () => {
    console.log("backend running on 5000")
})