const mongo = require('../mongoose/connect');
const Contact = require('../mongoose/models/contact.js');
const uuidv1 = require('uuid/v1');

const contact = {
    async insertContacts(req, res) {
        const { mailingId, quantity } = req.body;
        let contacts = [];
        for (let i = 0; i < quantity; i++) {
            let objContact = {
                mailingId: mailingId,
                contactId: uuidv1(),
                sync: false,
                clientId: 123,
                clientName: "litle",
                mailingName: "BENCHMARK",
                campaignId: 66,
                campaignName: "Lord of Cinder",
                status: "New",
                numbers: [
                    1947
                ],
                vars: [],
                cpf: 123,
                reference: 123,
                gathered: false,
                createdAt: "",
                numberType: [
                    "Landline"
                ],
                currentNumber: 0,
                counters: [
                ],
                renitency_at: false,
                uraEvents: [],
                updatedAt: false
            }
            contacts.push(objContact);
        }
        await Contact.collection.insertMany(contacts);
        res.send('ok');
    }
};

module.exports = contact;