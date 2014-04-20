var mongoose = require('mongoose');
var User = require('../models/User');
var Sell = require('../models/Sell');
var Buy = require('../models/Buy');
var ObjectId = mongoose.Schema.Types.ObjectId;

exports.newSell = function(req, res){
	User.findById(req.session.passport.user, function(err, user){
		Sell.create({item: req.body.item, 
				price: req.body.price, 
				user_id: req.session.passport.user,
				username: user.profile.name,
				userURL: "https://facebook.com/" + user.facebook}, 
			function(err, buy){
			if(err) return console.log(err);
			res.redirect('/');
		})
	});
}

exports.completeSell = function(req, res){
	Sell.findById(req.body.id, 
		function(err, buy){
			buy.sold = true;
			buy.save(function(err){
				if(err) return console.log(err);
				res.redirect('/');
			});
		}
	);
}

exports.deleteSell = function(req, res){
	Sell.findById(req.body.id,
		function(err, buy){
			buy.remove(function(err, product){
					res.redirect('/');
				}
			);
		}
	);
}

