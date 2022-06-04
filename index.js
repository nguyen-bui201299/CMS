const express = require("express");

const app = express();
var http = require('http').createServer(app)

//cài đặt view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//cài đặt đường dẫn đến mục public
app.use(express.static(__dirname + "/public"));

//chuyển routers nhận được sang ./routes/Routes.js
const Routers = require("./routers/Routers.js");
app.use("/", Routers);

const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
    console.log("App listening on port: http://localhost:" + PORT);
});