var express		 	     = require('express'),
	app			 	     = express(),
	bodyParser   		 = require('body-parser'),
	productController 	 = require('./server/controllers/ProductController');
	mongoose          	 = require('mongoose'),
	// urlencodedBodyParser = bodyParser.urlencoded({extended: false}),
	// methodOverride       = require('method-override');

mongoose.connect('mongodb://localhost:27017/foodInventory');

app.use(bodyParser());
// app.use(urlencodedBodyParser);
// app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/client/js'));


app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/views/index.html');
});

app.get('/api/products', productController.list);
app.post('/api/products', productController.create)


app.listen(3000, function(){
	console.log("Food Inventory");
});