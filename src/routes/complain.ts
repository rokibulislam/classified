import express from 'express'
import ComplainController from '../controller/complain'

const router  = express.Router()

router.get( '/', ComplainController.getComplains);

router.get( '/:id', ComplainController.getComplain);

router.post( '/', ComplainController.createComplain);

router.put( '/', ComplainController.updateComplain);

router.delete( '/', ComplainController.deleteComplain);

export default router;