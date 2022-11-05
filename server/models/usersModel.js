/**
 * READ: 
 * This file will contain all of the information regarding the schema of the
 * user 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//bcrypt information for the username and password protection
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

//model schema 
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
  });

//export file 
const User = mongoose.model('User', userSchema);

module.exports = User; 