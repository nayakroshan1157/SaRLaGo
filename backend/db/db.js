const mongoose = require('mongoose');


function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT
    ).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err));
}


module.exports = connectToDb;

// const mongoose = require('mongoose');

// async function connectToDb() {
//     try {
//         await mongoose.connect(process.env.DB_CONNECT);
//         console.log('✅ MongoDB Connected');
//     } catch (error) {
//         console.error('❌ MongoDB connection failed');
//         console.error(error.message);
//         process.exit(1);
//     }
// }

module.exports = connectToDb;
