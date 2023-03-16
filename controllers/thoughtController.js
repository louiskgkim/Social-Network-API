const { User, Thought } = require("../models");

module.exports = {
  getThought(req, res) {
    Thought.find({})
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
    
  },

  createThought(req, res) {
    
  },

  updateThought(req, res) {
    
  },

  deleteThought(req, res) {
    
  },

  createReaction(req, res) {
    
  },

  deleteReaction(req, res) {
    
};
