let express = require("express")
let bodyParser = require("body-parser")
let todoModel = require("../model/todo")

function configureRoutes(app){

    let router = express.Router();
    let usage = { usage: "GET /api/todo POST /api/todo with params todo"}


    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    router.get("/api", function(req, res){
        res.json(usage)
    })

    router.get("/api/todo", function(req, res){
        res.json(todoModel.getAll())
    })
    
    router.get("/api/*", function(req, res){
        res.json(usage)
    })
    
    router.post("/api/todo", function(req, res){
        let jsonResponse = {}

        jsonResponse = {message: 'You sent me: ' + req.body.todo}

        todoModel.add({todo: req.body.todo})

        console.log("handling todo post  with " + req.body.todo)

        res.json(jsonResponse)
    })

    app.use("/", router)
}

module.exports = { 
    configure : configureRoutes 
}