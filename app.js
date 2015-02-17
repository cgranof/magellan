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
		next: '/canary',
		problem:false

	});
});

app.get('/canary', function(req, res) {
	res.render('index', {
		place: 'Canary', 
		explorer: 'Magellan',
		next: '/capeVerde',
		problem:false

	});
});

app.get('/capeVerde', function(req, res) {
	res.render('index', {
		place: 'Cape Verde', 
		explorer: 'Magellan',
		next: '/straitOfMagellan',
		problem:false

	});
});

app.get('/straitOfMagellan', function(req, res) {
	res.render('index', {
		place: 'Straight of Magellan', 
		explorer: 'Magellan',
		next: '/guam',
		problem:false

	});
});

app.get('/guam', function(req, res) {
	res.render('index', {
		place: 'Guam', 
		explorer: 'Magellan',
		next: '/philipines',
		problem: false

	});
});


app.get('/philipines', function(req, res) {
	res.render('index', {
		place: 'Philipines', 
		explorer: 'Magellan',
		problem:false

	});

});

// app.get('/place',function(req, res) {
// 	res.render('index', {
// 		var data = req.body;
// 		place: data,
// 		explorer: 'Magellan'
// 	})
// })
app.get('/:place',function(req, res){
	var data = req.params.place;
	res.render('index',{
		place: data,
		explorer:'Magellan',
		problem: true

	})
	

})

app.post('/unknown', function(req,res) {
console.log(req.body);
res.redirect('/place');
});


var server = app.listen(7423, function() {
	console.log('Express server listening on port ' + server.address().port);
});
