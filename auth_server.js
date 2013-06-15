var express = require('express');
var crypto = require('crypto');
var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.configure(function() {
    app.use(express.bodyParser());
    app.use(allowCrossDomain);
});

var id_tokens = {};
var token_ids = {};

var users = {
	'aufmesser@surgeons.com': 1,
	'gott@surgeons.com': 2,
	'gunst-fehler@surgeons.com': 3,
	'augenblick@surgeons.com': 4,
	'meier@patients.com': 5,
	'mueller@patients.com': 6,
	'moser@patients.com': 7,
	'bauer@patients.com': 8,
	'baecker@patients.com': 9,
	'fasching@patients.com': 10,
	'akh@hospitals.com': 11,
	'lkh@hospitals.com': 12,
	'bbw@hospitals.com': 13,
	'tulln@hospitals.com': 14
};

app.post('/sign_in', function(req, res){
	if (req.body.remember_token) {
		if(!token_ids[req.body.remember_token])
			return res.send(401, null);

  	console.log("Tokens: " + JSON.stringify(id_tokens));
  	console.log("Tokens: " + JSON.stringify(token_ids));

		return res.send({
			user_id: token_ids[req.body.remember_token],
			remember_token: req.body.remember_token,
			auth_token: req.body.remember_token
		});
	}

	var user_id = users[req.body.email];

	if (!user_id)
		return res.send(401, null);

	if (!id_tokens[user_id])
		crypto.randomBytes(32, function(ex, buf) {
			var token = buf.toString('hex');

			id_tokens[user_id] = token;
			token_ids[token] = user_id;

			var params = {
	  		user_id: user_id,
	  		remember_token: token,
	  		auth_token: token
	  	};

	  	return res.send(params);
		});
	else {
		console.log("C");
	  return res.send({
	  	user_id: user_id,
	  	remember_token: token_ids[user_id],
	  	auth_token: token_ids[user_id]
	  });
	}
});

app.delete('/sign_out', function(req, res) {
	user_id = token_ids[req.body.auth_token];
	delete token_ids[req.body.auth_token];

	res.send({ user_id: user_id });
});

app.options("*", function(req, res) {
	res.send(200, null);
});

app.listen(9001);