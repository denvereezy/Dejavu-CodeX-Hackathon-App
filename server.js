var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

    // create a route
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//product list

app.get('/', function(req, res){
	res.render("index");
});


	//app.listen(3000);
   var port = process.env.PORT || 8080;		
   //start the server
   var server = app.listen(port, function () {
        var host = server.address().address;
        var port = server.address().port;
     	console.log('Example app listening at http://%s:%s', host, port);

   });
