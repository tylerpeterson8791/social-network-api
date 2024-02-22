const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
  } = require('../../controllers/userController');

  router.route('/users')
  .get(getAllUsers)
  .post(createUser);

router.route('/users/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router.route('/users/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

  module.exports = router;
