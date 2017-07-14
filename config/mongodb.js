
const mongoose   = require('mongoose')
mongoose.Promise = require('bluebird')

const online = true;
const url =  online ? 'mongodb://gps:gps@ds147797.mlab.com:47797/gps' : 'mongodb://localhost/gps';



mongoose.connect(url)

.then(() =>{
 mongoose.connection.on('error', err =>{
  console.log(`mongoose connection: `+err)
})
 mongoose.connection.on('reconnected', ()=> {
  console.log('Reconnected to MongoDB');
});
 console.log('Mongodb Conectado : )')
})
.catch(err => {
  console.log(`rejected promise ${err}`)
  mongoose.disconnect()      

})

process.on('SIGINT', ()=> {
  mongoose.connection.close(()=> {
    console.log('Mongodb: bye : )');
    process.exit(0);
  });
});


module.exports = mongoose;

