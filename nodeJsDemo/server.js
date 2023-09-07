require('dotenv').config();

const express = require('express'),
    app = express(),
    port = process.env.PORT;




app.use(express.static(__dirname + "/public"))


app.set('view engine', 'ejs');

app.use(require('./routes/web'));



app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
