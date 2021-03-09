const express = require('express')
const router  = express.Router();

const { getAttributes, getAttribute, createAttribute, updateAttribute, deleteAttribute } = require('../controller/attribute')

router.get( '/', getAttributes);

router.get( '/:id', getAttribute);

router.post( '/', createAttribute);

router.put( '/', updateAttribute);

router.delete( '/', deleteAttribute);

module.exports = router;