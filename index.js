import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import logger from "morgan"
dotenv.config()
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb", parameterLimit: 10000 }))
app.use(cors())
app.set("views", "./views")
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(logger("dev"))

import routerAdmin from "./routers/index.js"

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running with port ${process.env.PORT || 8000} `)
})
app.use(routerAdmin)


