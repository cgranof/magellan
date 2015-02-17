var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index', {
		place: 'Seville', 
		explorer: 'Magellan',
		next: '/canary'

	});
});

app.get('/canary', function(req, res) {
	res.render('index', {
		place: 'Canary', 
		explorer: 'Magellan',
		next: '/capeVerde'

	});
});

app.get('/capeVerde', function(req, res) {
	res.render('index', {
		place: 'Cape Verde', 
		explorer: 'Magellan',
		next: '/straitOfMagellan'

	});
});

app.get('/straitOfMagellan', function(req, res) {
	res.render('index', {
		place: 'Straight of Magellan', 
		explorer: 'Magellan',
		next: '/guam'

	});
});

app.get('/guam', function(req, res) {
	res.render('index', {
		place: 'Guam', 
		explorer: 'Magellan',
		next: '/philipines'

	});
});


app.get('/philipines', function(req, res) {
	res.render('index', {
		place: 'Philipines', 
		explorer: 'Magellan'

	});
});


var server = app.listen(7423, function() {
	console.log('Express server listening on port ' + server.address().port);
});
