
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Size = new Schema({
	FILE_SIZE: {type: String, required: true, default: 1}
	
});

module.exports = mongoose.model('Size', Size);