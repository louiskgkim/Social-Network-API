const { User, Thought } = require("../models");

module.exports = {
  getUser(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  getSingleUser(req, res) {
  
  },

  createUser(req, res) {

  },

  updateUser(req, res) {
    
  },

  deleteUser(req, res) {
    
  },

  addFriend(req, res) {
    
  },

  deleteFriend(req, res) {
    
};