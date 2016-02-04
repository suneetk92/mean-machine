console.log('Method 2');
var express = require('express'),
	app     = express(),
	path    = require('path')
	adminRouter = express.Router();

adminRouter.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();
});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

adminRouter.get('/', function(req, res) {
	res.send('I am the dashboard!!');
});

adminRouter.get('/users', function(req, res) {
	res.send('I show all the users!!');
});

adminRouter.get('/posts', function(req, res) {
	res.send('I show all the posts!!');
});

app.listen(1337);
app.use('/admin', adminRouter);

console.log('Yuppieee @ http://localhost:1337');