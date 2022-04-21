const app = require("express")();
const bodyParser = require("body-parser");
const cors = require('cors');
const http = require("http").createServer(app);

//ROUTES
const contactRouter = require('./routes/contact');

//Set Ejs
app.set("view engine", 'ejs');

//public
app.use(require("express").static("public"));

//body parser
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
//cors
app.use(cors());

//ROUTER INIT
app.use('/api', contactRouter);

//Home
app.get('/', (req, res) => {
    res.render('home');
});

//Wrong Location
app.get("/*", (req, res) => {
    res.redirect('/');
});

//Server Starting
const port = process.env.PORT || 4000;
http.listen(port, () => {
    console.log("ready at 4000");
})