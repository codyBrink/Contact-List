var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//db connection 
mongoose.connect('mongodb://localhost:27017/addresses');

//configuration
app.use(express.static(__dirname + '/public'));                 // set the static files location.
app.use(morgan('dev'));                                         // log every request to the console.
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded.
app.use(bodyParser.json());                                     // parse application/json.
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json.
app.use(methodOverride());

//the "Addresses" model.
var Addresses = mongoose.model('Addresses', {
	name : String,
	email : String,
	state : String,
	phone : String
});

//routes and api usage
app.get('/api/addresses', function(req, res){
	//find any addresses in our db
	Addresses.find(function(err, addresses){
		//if an error occurs...send a message to the client.
		if(err)
			res.send(err)
		//sends the "addresses" found in our collection.
		res.json(addresses);
	});
});


//creation for addresses
app.post('/api/addresses', function(req, res){
	//adds the addresses
	Addresses.create({
		name : req.body.name,
		email : req.body.email,
		state : req.body.state,
		phone : req.body.phone,
		done : false
	},
		function(err, address) {
			
			if(err)
				res.send(err);
			
			
			//loops through and displays and finds any addresses in db
			Addresses.find(function(err, addresses){
				if (err)
					res.send(err)
				
				res.json(addresses);
			});
	});
});


//deletes the address
app.delete('/api/addresses/:addresses_id', function(req, res) {
	//finds the row in our collection to delete based off it's id.
	 Addresses.remove({
		 _id : req.params.addresses_id
	 }, function(err, address) {
		 if (err)
			 res.send(err);
		 
			 Addresses.find(function(err, addresses) {
				 if (err)
					 res.send(err)
				 res.json(addresses);
			 });
		});
 });
 

 
	 
	

//route to front end
app.get('*', function(req, res){
	res.sendfile('./public/index.html');
});

 //launch
app.listen(8080);
    console.log("App listening on port 8080");

