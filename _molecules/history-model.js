const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const name = require('../_atoms/string-required')
const devices_id = require('../_atoms/object-ref')('Devices')
const user_id = require('../_atoms/object-ref')('Users')
const created_at = require('../_atoms/date-default')
const updated_at = require('../_atoms/date-default')


const History = new Schema({
    user_id,
    devices_id,
    geo: {
        type: [Number],
        index: '2d'
    },
    created_at,
    updated_at
});



const molecule = mongoose.model('Historys', History);


module.exports = molecule