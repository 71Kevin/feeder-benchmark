const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({    
    contactId: Number,
    mailingId: Number
});

module.exports = mongoose.model('contact', contactSchema);
