const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');   

module.exports.registerCaptain = async (req, res, next ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }  
    const {fullname,email,password,vehicle} = req.body;
    const isCaptainAlreadyExists = await captainService.getCaptainByEmail(email);
    if (isCaptainAlreadyExists) {
        return res.status(400).json({ message: 'Captain with this email already exists' });
    }
    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicletype: vehicle.vehicletype,        
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ captain, token });

}