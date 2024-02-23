const mongoose = require('mongoose');
const { User, Thought } = require('../models');

mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const seedUsersAndThoughts = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Seed Users
    const usersData = [
      { username: 'LeBron_James', email: 'lebron@nba.com' },
      { username: 'Stephen_Curry', email: 'curry@nba.com' },
      { username: 'Kevin_Durant', email: 'durant@nba.com' },
      { username: 'Giannis_Antetokounmpo', email: 'giannis@nba.com' },
      { username: 'Kawhi_Leonard', email: 'kawhi@nba.com' },
      { username: 'Luka_Doncic', email: 'luka@nba.com' },
      { username: 'Karl_Anthony_Towns', email: 'kat@nba.com' },
      { username: 'Anthony_Edwards', email: 'ant@nba.com' },
      { username: 'Joel_Embiid', email: 'embiid@nba.com' },
      { username: 'Damian_Lillard', email: 'dame@nba.com' },
    ];

    await User.create(usersData);

    // Seed Thoughts
    const thoughtsData = [
      { thoughtText: 'All Star Weekend was a blast!', username: 'LeBron_James' },
      { thoughtText: 'So much fun in the 3 point shootout!', username: 'Stephen_Curry' },
      { thoughtText: 'Boo.....', username: 'Kevin_Durant' },
      { thoughtText: 'The Bucks will be back on top. Mark my words.', username: 'Giannis_Antetokounmpo' },
      { thoughtText: 'I am a really fun guy.', username: 'Kawhi_Leonard' },
      { thoughtText: 'Last week I sneezed and a triple-double came out of my nose.', username: 'Luka_Doncic' },
      { thoughtText: 'There are some hungry Wolves out there...', username: 'Karl_Anthony_Towns' },
      { thoughtText: 'Ant-Man is taking over!  Watch yourselves', username: 'Anthony_Edwards' },
      { thoughtText: 'Healing quickly, thanks for the well wishes.', username: 'Joel_Embiid' },
      { thoughtText: 'WHAT TIME IS IT? DAME TIME!', username: 'Damian_Lillard' },
    ];

    await Thought.create(thoughtsData);

    console.log('Seed data inserted successfully');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    // Disconnect from the database
    await mongoose.disconnect();
  }
};

seedUsersAndThoughts();