const UserModel = require('../models/user');
require('../config/db');

// Store user
const storeUser = async (req, res) => {
    const data = new UserModel(req.body);
    const result = await data.save();
    res.status(200).json(result);
};

// List all users
const listUsers = async (_, res) => {
    const result = await UserModel.find().sort({_id:-1});
    res.status(200).json({data:result});
};

// Get specific user
const getUser = async (req, res) => {
    const result = await UserModel.findOne(req.params);
    res.status(200).json({data:result});
};

// Update specifig user
const updateUser = async (req, res) => {
    const result = await UserModel.updateOne(req.params, {$set:req.body});
    if (result.acknowledged) {
        res.status(200).json({message:"Successfully user updated."});
    } 
};

// Delete specific user
const deleteUser = async (req, res) => {
    const result = await UserModel.deleteOne(req.params);
    if (result.acknowledged) {
        res.status(200).json({message:"Successfully user deleted"});
    }
};

module.exports = { 
    storeUser, 
    listUsers, 
    getUser, 
    updateUser, 
    deleteUser 
};