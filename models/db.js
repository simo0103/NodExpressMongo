const MONGOOSE = require ('mongoose');

MONGOOSE.connect('mongodb://localhost:27017/MenuDB', {useNewUrlParser: true}, (err, db) => {
    !err ? console.log('MONGODB CONNECTED!!!') : console.log('ERROR!DB NOT CONNECTED! ' + err)
    var cursor = db.collection('menu').find();

    cursor.each(function(err, doc) {

        console.log(doc);
    });
});

