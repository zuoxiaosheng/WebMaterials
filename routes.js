exports = module.exports = function(app) {
	app.get('/', index);
	app.get('/clock1', clock1);
	app.get('/clock2', clock2);
	app.get('/code', code);
	app.get('/sparklines', sparklines);
}

function index(req, res) {
	res.render('index');
}

function clock1(req, res) {
	res.render('clock1');
}

function clock2(req, res) {
	res.render('clock2');
}

function code(req, res) {
	res.render('code');
}

function sparklines(req, res) {
	res.render('sparklines');
}