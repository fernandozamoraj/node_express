let express = require("express")
let path = require("path")

function configureRoutes(app){

    let router = express.Router();
    let publicPath = path.join(__dirname + "/../public/")
    
    router.get("/", function(req, res){
        
        res.sendFile(path.join(publicPath + "index.html"))

    })

    router.get("/todo", function(req, res){
        res.sendFile(path.join(publicPath + "todo.html"))
    })

    app.use("/", router)
}

module.exports = configureRoutes