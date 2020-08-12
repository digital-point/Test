const mongoose = require('mongoose');
const db = "mongodb+srv://andreiroman:76dJILSPoHHrBalc@andreiroman.ognrm.mongodb.net/Interview?retryWrites=true&w=majority";

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