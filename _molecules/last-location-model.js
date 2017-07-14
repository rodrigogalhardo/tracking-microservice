const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 					= require ('../_atoms/string-required')
const devices_id 			= require ('../_atoms/object-ref')('Devices')
const user_id 				= require ('../_atoms/object-ref')('Users')
const imei 					= require ('../_atoms/string-required')
const lat 					= require ('../_atoms/number-default-0')
const speed 				= require ('../_atoms/number-default-0')
const lng 					= require ('../_atoms/number-default-0')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')


const LastPositions = new Schema({
	user_id,	
	devices_id,
	imei,
	lat,
	lng,
	speed,
	created_at,
	updated_at
});

LastPositions.index({imei: 1, lat: 1, lng: 1, speed:1})

const molecule =  mongoose.model('LastPositions', LastPositions);


module.exports = molecule
