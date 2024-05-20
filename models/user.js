const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Please provide email"],
		unique: true
	},
	password: {
		type: String,
		required: [true, "Please provide password"],
		min:[8, 'Too few characters']
	},
	is_active: {
		type: String,
		enum: {
			values: ['Y', 'N'],
			message: '{VALUE} is not supported'
		},
		default: 'N'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', UserSchema);