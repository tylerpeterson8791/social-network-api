const { Thought } = require('../models');

const thoughtController = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // FILL IN REST getThoughtById, createThought, updateThought, deleteThought, createReaction, deleteReaction
};

module.exports = thoughtController;