const mongoose = require('mongoose');
const captainSchema = new mongoose.Schema({
    firstname: { type: String, required: true,minlength:[3,'First name must be at least 3 characters long'] },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, match: [/\S+@\S+\.\S+/, 'Invalid Email'] },
    password: { type: String, required: true, minlength: [6,'Password must be at least 6 characters long'] },
    socketId: { type: String, default: null },
    status: { type: String, enum: ['available', 'unavailable'], default: 'unavailable' },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters long'],
        },
        plate:{
            type: String,
            required: true, 
            minlength: [3, 'Plate must be at least 3 characters long'],
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1'],
        },
        vehicletype:{
            type: String,
            required: true,
            enum: ['toto', 'auto'],
        },
    },
    location: {
        lat:{
            type: Number,
            required: true,
        },
        lng:{
            type: Number,
            required: true,
        }
}
})
captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}   

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}   

const captainModel = mongoose.model('Captain', captainSchema);
module.exports = captainModel;
