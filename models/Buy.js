var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var bool = mongoose.Schema.Types.Boolean;

var buySchema = new mongoose.Schema({
	user_id: ObjectId,
	username: String,
	item: String,
	price: String,
	userURL: String,
	sold: { type: Boolean, default: false}
});

module.exports = mongoose.model('Buy', buySchema);