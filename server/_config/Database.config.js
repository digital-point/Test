const mongoose = require('mongoose');
const db = process.env.DB_DATABASE;

module.exports = {
    async connectDB() {
        try {
            await mongoose.connect(db, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            });
            console.log("We're connected to db");
        } catch (err) {
            console.error(err.message);
            process.exit(1);
        }
    },
}