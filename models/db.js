const MONGOOSE = require ('mongoose');

MONGOOSE.connect('mongodb://localhost:27017/MenuDB', {useNewUrlParser: true}, (err) => {
    !err ? console.log('MONGODB CONNECTED!!!') : console.log('ERROR!DB NOT CONNECTED! ' + err)
});

