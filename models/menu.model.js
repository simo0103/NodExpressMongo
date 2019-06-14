const mongoose = require ('mongoose');
//creeiamo lo schema
var MENU_SCHEMA = new mongoose.Schema({
    name: {
        type: String        
    },
    category: {
        type: String        
    },
    price: {
        type: Number        
    },
    ingr: {
        type: Array
    }
});

mongoose.model('Menu', MENU_SCHEMA)