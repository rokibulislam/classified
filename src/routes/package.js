const express = require('express')
const router  = express.Router()

const { getPackages, getPackage, createPackage, updatePackage, deletePackage } = require('../controller/package')


router.get( '/', getPackages);

router.get( '/:id', getPackage);

router.post( '/', createPackage);

router.put( '/', updatePackage);

router.delete( '/', deletePackage);

module.exports = router;