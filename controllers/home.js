var mongoose = require('mongoose');
var User = require('../models/User');
var Sell = require('../models/Sell');
var Buy = require('../models/Buy');
var ObjectId = mongoose.Schema.Types.ObjectId;

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.loggedIn = function(req, res, next){
	console.log(req.originalUrl);
	if(req.session.passport.user){
		next();
	}
	else if(req.originalUrl.indexOf("/auth/") > -1){
		next();
	}
	else if(req.originalUrl != '/login'){
		res.redirect('/login');
	}
	else{
		next();
	}
}

exports.newPage = function(req, res){
	res.render('new');
}

exports.buy = function(req, res){
	Buy.find({}, function(err, buys){
		res.render('buy', {buys: buys});
	});

	
}

exports.sell = function(req, res){
	Sell.find({}, function(err, sells){
		res.render('sell', {sells : sells});
	});
}