var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs'); // we require filesystem to write
var Prices = './modules/Prices.json'; // this will require the database for prices in JSON
var Transactions = './modules/Transactions.json'; // this will require the database for transactions in JSON
var bodyParser = require('body-parser');


// Route for first page displays index.html
//Lets also send the database to that route so we can display all products on first page.
app.use(express.static(__dirname));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
	extended: true
})); // support encoded bodies

/*
 *Now when user clicks buy then it will redirect through ID. 
 *We will then check in database what has that id value and retrieve its information and update the transactions object
 */
app.get('/buyproduct/:id', function(request, response) {
	var id = request.params.id;
	fs.readFile(Transactions, 'utf8', function readFileCallback(err, data) {
		if (err) {
			response.redirect('/');
		} else {
			obj = JSON.parse(data); //now it an object
			obj.Transactions.push({
				id: obj.Transactions.length,
				date: Date.now(),
				prodid: Prices.Prices[id].id,
				total: Prices.Prices[id].price
			}); //add some data
			json = JSON.stringify(obj); //convert it back to json
			fs.writeFile(Transactions, json, 'utf8', response.redirect('/success')); // write it back to disk
		}
	})
});

app.post('/addproduct/submit', function(request, response) {
	var vendor = request.body.vendor;
	var productname = request.body.productname;
	var price = request.body.price;
	var summary = request.body.summary;
	var image = request.body.image;

	fs.readFile(Prices, 'utf8', function readFileCallback(err, data) {
		if (err) {
			response.redirect('/');
		} else {
			obj = JSON.parse(data); //now it add object
			obj.Prices.push({
				id: obj.Prices.length,
				vendor: vendor,
				productname: productname,
				price: price,
				summary: summary,
				image: image
			}); //add some data
			json = JSON.stringify(obj); //convert it back to json
			fs.writeFile(Prices, json, 'utf8', response.redirect('/')); // write it back to disk
		}
	})
});

app.get('/viewedit?id=:id', function(request, response) {
	var id = request.params.id;
	response.sendFile(__dirname + '/edit2.html');
});

app.get('/viewedit', function(request, response) {
	var id = request.params.id;
	response.sendFile(__dirname + '/edit2.html');
});

app.post('/viewedit/submit', function(request, response) {
	var vendor = request.body.vendor;
	var productname = request.body.productname;
	var price = request.body.price;
	var summary = request.body.summary;
	var image = request.body.image;
	var id = request.body.id;
		fs.readFile(Prices, 'utf8', function readFileCallback(err, data) {
		if (err) {
			response.redirect('/');
		} else {
			obj = JSON.parse(data); //now it add object
			obj.Prices[id].vendor = vendor; 
			obj.Prices[id].productname = productname; 
			obj.Prices[id].price = price; 
			obj.Prices[id].summary = summary; 
			obj.Prices[id].image = image; 
			json = JSON.stringify(obj); //convert it back to json
			fs.writeFile(Prices, json, 'utf8', response.redirect('/editproduct')); // write it back to disk
		}
	})
});



app.get('/deleteproduct/:id', function(request, response) {
	var id = request.params.id;
	fs.readFile(Prices, 'utf8', function readFileCallback(err, data) {
		if (err) {
			response.redirect('/');
		} else {
			obj = JSON.parse(data);
			for (var i = 0; i < obj.Prices.length; i++) {
				obj.Prices[i].id = obj.Prices[i].id - 1; // Changes the ID for the rest
			}
			obj.Prices.splice(id, 1); // removes the object 
			json = JSON.stringify(obj); //convert it back to json
			fs.writeFileSync(Prices, json, 'utf8', response.redirect('/')); // write it back to disk
		}
	})
});


app.get('/listTransaction/:id', function(request, response) {
	var id = request.params.id;
	fs.readFile(Transactions, 'utf8', function readFileCallback(err, data) {
		if (err) {
			response.redirect('/');
		} else {
			obj = JSON.parse(data); //now it an object
			var Transactions = Transactions[id];
		}
	})
});



app.get('/success', function(request, response) {
	response.sendFile(__dirname + '/index.html');
});

app.get('/addproduct', function(request, response) {
	response.sendFile(__dirname + '/addproduct.html');
});

app.get('/editproduct', function(request, response) {
	response.sendFile(__dirname + '/edit.html');
});



app.get('/transaction', function(request, response) {
	response.sendFile(__dirname + '/listTransactions.html');
});

app.listen(8080);