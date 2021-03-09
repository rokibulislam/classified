const express = require('express')
const router  = express.Router()

const { getTags, getTag, createTag, updateTag, deleteTag } = require('../controller/tag')


router.get( '/', getTags);

router.get( '/:id', getTag);

router.post( '/', createTag);

router.put( '/', updateTag);

router.delete( '/', deleteTag);

module.exports = router;