const mongo = require('../mongoose/connect');
const Contact = require('../mongoose/models/contact.js');

const contact = {
    async insertContacts(req, res) {
        const { mailingId, quantity } = req.body;
        let contacts = [];
        for (let i = 0; i < quantity; i++) {
            let objContact = {
                mailingId: mailingId,
                contactId: i
            }
            contacts.push(objContact);
        }
        await Contact.collection.insertMany(contacts);
        res.send('ok');
    }
};

module.exports = contact;