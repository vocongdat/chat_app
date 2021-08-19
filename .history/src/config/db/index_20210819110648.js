const mongoose = require('mongoose');

const URL = process.env.DATABASE_URL;

console.log(URL);

async function connect() {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Connect success');
    } catch (error) {
        console.log('Connect fail');
    }
}

module.exports = { connect };
