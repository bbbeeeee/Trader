var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var bool = mongoose.Schema.Types.Boolean;

var sellSchema = new mongoose.Schema({
	user_id: String,
	username: String,
	item: String,
	price: String,
	userURL: String,
	sold: { type: Boolean, default: false}
});

module.exports = mongoose.model('Sell', sellSchema);