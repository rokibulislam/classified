const express = require('express')
const router  = express.Router()

const { getCategories, getCategory, createCategory, updateCategory, deleteCategory } = require('../controller/category')

router.get( '/', getCategories);

router.get( '/:id', getCategory);

router.post( '/', createCategory);

router.put( '/', updateCategory);

router.delete( '/', deleteCategory);

module.exports = router;