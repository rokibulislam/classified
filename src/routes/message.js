const express = require('express')
const router  = express.Router()

const { getMessages, getMessage, createMessage, updateMessage, deleteMessage } = require('../controller/message')

router.get( '/', getMessages);

router.get( '/:id', getMessage);

router.post( '/', createMessage);

router.put( '/', updateMessage);

router.delete( '/', deleteMessage);

module.exports = router;