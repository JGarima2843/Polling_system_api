const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Polling_System');

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = db;