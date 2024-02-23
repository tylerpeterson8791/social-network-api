const { User } = require('../models');

const userController = {
  //GET ALL USERS
    getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

//GET A SINGLE USER
  getUserById: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId)
        .populate('thoughts')
        .populate('friends');
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // POST a new user
  createUser: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // PUT to update a user by its _id
  updateUser: async (req, res) => {
    try {
      const userId = req.params.userId;
      //Make sure to include the new:true on these to return the updaded version
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(updatedUser);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // DELETE to remove user by its _id
  deleteUser: async (req, res) => {
    try {
      const userId = req.params.userId;
      const deletedUser = await User.findByIdAndDelete(userId);

      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(deletedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // POST to add a new friend to a user's friend list
  addFriend: async (req, res) => {
    try {
      const userId = req.params.userId;
      const friendId = req.params.friendId;

      //push to add
      const user = await User.findByIdAndUpdate(userId, { $push: { friends: friendId } }, { new: true });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // DELETE to remove a friend from a user's friend list
  removeFriend: async (req, res) => {
    try {
      const userId = req.params.userId;
      const friendId = req.params.friendId;

    //pull to remove
      const user = await User.findByIdAndUpdate(userId, { $pull: { friends: friendId } }, { new: true });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
