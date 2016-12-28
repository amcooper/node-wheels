var mongoose = require('mongoose');

module.exports = mongoose.model('Item', { // SUBTHIS
    text: {
        type: String,
        default: ''
    }
});