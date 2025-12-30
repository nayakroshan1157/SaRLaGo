const captainModel = require('../models/captain.model');
const jwt = require('jsonwebtoken');        



module.exports.createCaptain = async ({
    fullname,lastname,email,password,color,plate,capacity,vehicletype   
}) => {
    if(!fullname || !lastname || !email || !password || !color || !plate || !capacity || !vehicletype){
        throw new Error('All fields are required');
    }
    const Captain =  captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email:email,
        password:password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicletype,        
    })
    return Captain;
}

module.exports.getCaptainByEmail = async (email) => {
    const captain = await captainModel.findOne