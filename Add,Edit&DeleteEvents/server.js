require('dotenv').config();

const express = require('express'),
      app     = express() ,
      expressLayout = require('express-ejs-layouts'),
      mongoose = require('mongoose'),
      port = process.env.PORT;


// Static Middlewares
app.use(express.static(__dirname + "/public"));
app.use('/node_modules' , express.static(__dirname + "/node_modules"));
//View Engine
app.set('view engine' , 'ejs');
app.use(expressLayout);
// Database Connection
(()=>{
    mongoose.connect(process.env.DB_URI);
    const db = mongoose.connection;
    db.on('error' , console.error.bind(console , "Connection Failed"))
    db.once('open' , ()=> { console.log("Database Connected Successfully")})
})();

app.use(express.urlencoded({extended : true}))
// Routing
app.use(require('./routes/router'));


app.listen(port , () => {
    console.log(`Server running on localhost:${port}`);
});