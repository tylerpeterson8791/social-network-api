const mongoose = require('mongoose');
const Thought = require('./Thought');
//DO I NEED THIS? AM I DOING THIS RIGHT?  CHECK ONCE SEEDED.

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

const User = mongoose.model('User', userSchema);

module.exports = User;