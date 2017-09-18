let express = require("express")
let bodyParser = require("body-parser")


let app = express();


app.use("/", function(req, res){
    res.send("Hi from todo app")
})

app.use("*", function(req, res){
    req.statusCode(404).send("Oops! It looks like the resource that you requested is not available")
})


app.listen(3000, function(){
    console.log("todoapp listening on port 3000")
})

