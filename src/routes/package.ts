import express from 'express'
import PackageController from '../controller/package'
const router  = express.Router()

router.get( '/', PackageController.getPackages);

router.get( '/:id', PackageController.getPackage);

router.post( '/', PackageController.createPackage);

router.put( '/', PackageController.updatePackage);

router.delete( '/', PackageController.deletePackage);

export default router;