var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', { // SUBTHIS
    text: {
        type: String,
        default: ''
    }
});