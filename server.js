//---------------------------Import Express-----------------------------
let express = require('express')


//---------------------------Initialize the app-------------------------
let app = express()
app.use(express.urlencoded({extended : true}));

//---------------------------Use the router-----------------------------
let routes = require('./routes');
app.use('/', routes);


//---------------------------The port we're using-----------------------
app.listen(3000, function() {
    console.log('Server is running on port 3000')
});