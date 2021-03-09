const express = require('express')
const router  = express.Router()
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controller/user')

router.get( '/', getUsers);

router.get( '/:id', getUser);

router.post( '/', createUser);

router.put( '/', updateUser);

router.delete( '/', deleteUser)

module.exports = router;