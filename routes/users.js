const express = require('express');
const router = express.Router();

const { storeUser, listUsers, getUser, updateUser, deleteUser } = require('../controllers/user');

router.route('/store-user').post(storeUser);
router.route('/list-users').get(listUsers);
router.route('/get-user/:_id').get(getUser);
router.route('/update-user/:_id').put(updateUser);
router.route('/delete-user/:_id').delete(deleteUser);

module.exports = router;