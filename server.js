const express = require("express")
const dotenv = require("dotenv")
const connectToDatabase = require("./database/connectToDatabase")


const app = express()
app.use(express.json())
dotenv.config()
connectToDatabase()

app.use("/books/", require("./routes/bookRoutes"))

const PORT = process.env.PORT || 2002
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
