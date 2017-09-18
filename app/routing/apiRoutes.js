let express = require("express")
let bodyParser = require("body-parser")

function configureRoutes(app){

    let router = express.Router();
    let usage = { usage: "to be defined"}


    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    router.get("/api", function(req, res){
        res.json(usage)
    })

    router.get("/api/*", function(req, res){
        res.json(usage)
    })

    app.use("/", router)
}

module.exports = configureRoutes