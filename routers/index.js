import express from "express"
const routerAdmin = express.Router()

routerAdmin.get("/",(req,res)=> {
    res.render("index")

})
routerAdmin.get("/dang-xuat",(req,res)=> {
    res.render("login")

})



export default routerAdmin