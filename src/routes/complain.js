const express = require('express')
const router  = express.Router()

const { getComplains, getComplain, createComplain, updateComplain, deleteComplain } = require('../controller/complain')

router.get( '/', getComplains);

router.get( '/:id', getComplain);

router.post( '/', createComplain);

router.put( '/', updateComplain);

router.delete( '/', deleteComplain);

module.exports = router;