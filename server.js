let express = require("express")
let bodyParser = require("body-parser")
let htmlRoutes = require("./app/routing/htmlRoutes")
let apiRoutes = require("./app/routing/apiRoutes")
let path = require("path")

let publicPath = path.join(__dirname + "/app/public/")

let app = express();

let port = process.env.PORT || 3000


apiRoutes.configure(app)
htmlRoutes.configure(app)

app.get("/*", function(req, res){
    res.sendFile(path.join(publicPath + "404.html"))
})

app.listen(port, function(){
    console.log("todoapp listening on port 3000")
})

