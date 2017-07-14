const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const equipment 			= require ('../_atoms/string-required')
const imei 					= require ('../_atoms/number-default-0')
const user_id 				= require ('../_atoms/object-ref')('Users')
const gsm 					= require ('../_atoms/string-required-unique')
const status 				= require ('../_atoms/boolean-default-true')
const aliase 				= require ('../_atoms/string')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')
const deleted_at 		    = require('../_atoms/date-default')


const Device = new Schema({
	user_id,
	imei,
	gsm,
	aliase,
	equipment,
	status,
	created_at,
	updated_at,
	deleted_at
});

Device.index({imei: 1,status:1, gsm: 1});

const molecule =  mongoose.model('Devices', Device);


module.exports = molecule
