const { Thought } = require('../models');

const thoughtController = {
    //GET ALL THOUGHTS
    getAllThoughts: async (req, res) => {
      try {
        const thoughts = await Thought.find();
        res.json(thoughts);
      } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },
  //GET one thought
    getThoughtById: async (req, res) => {
      try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
          return res.status(404).json({ error: 'Thought not found' }); 
        }
        res.json(thought);
      } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },
 
//Post new thought
    createThought: async (req, res) => {
      try {
        const thought = await Thought.create(req.body);
       await User.findByIdAndUpdate(req.body.username, { $push: { thoughts: thought._id } });
  // DONT KNOW IF THIS IS CORRECT????  Spread array??? I get an error but the DB updates
        res.json(thought);
      } catch (err) {
        res.status(400).json({ error: 'Invalid request' });
      }
    },
  
//Push thought
    updateThought: async (req, res) => {
      try {
        const thought = await Thought.findByIdAndUpdate(
          req.params.thoughtId,
          req.body,
          { new: true, runValidators: true }
        );
        if (!thought) {
          return res.status(404).json({ error: 'Thought not found' });
        }
        res.json(thought);
      } catch (err) {
        res.status(400).json({ error: 'Invalid request' });
      }
    },
  
    //DELETE thought
    deleteThought: async (req, res) => {
      try {
        const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!thought) {
          return res.status(404).json({ error: 'Thought not found' });
        }
       await User.findByIdAndUpdate(thought.username, { $pull: { thoughts: thought._id } });
  // DONT KNOW IF THIS IS CORRECT????  Spread array???
        res.json(thought);
      } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },
  
    //POST Reaction
    createReaction: async (req, res) => {
      try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
          return res.status(404).json({ error: 'Thought not found' });
        }
  
        thought.reactions.push(req.body);
        await thought.save();
  
        res.json(thought);
      } catch (err) {
        res.status(400).json({ error: 'Invalid request' });
      }
    },
 
    //DELETE REACTION
    deleteReaction: async (req, res) => {
      try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
          return res.status(404).json({ error: 'Thought not found' });
        }
  
        const reactionIdToDelete = req.params.reactionId;
        thought.reactions = thought.reactions.filter(
          (reaction) => reaction.reactionId.toString() !== reactionIdToDelete
        );
        await thought.save();
  
        res.json(thought);
      } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },
  };
  
  module.exports = thoughtController;
///do I need to export out the individual functions????