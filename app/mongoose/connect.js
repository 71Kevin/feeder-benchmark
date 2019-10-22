const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true
};

const mongo = {
    async connect() {
        connection = await mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_SCHEMA}`, options);
    }
}
mongoose.connection.on(`connected`,() => {
    console.log(`connection sucess ${process.env.MONGO_HOST}/${process.env.MONGO_SCHEMA}`);
});

mongoose.connection.on(`connection error`, () => {
    console.log(`connection error ${process.env.MONGO_HOST}/${process.env.MONGO_SCHEMA}`);
});

module.exports = mongo;
