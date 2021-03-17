import express from 'express'
import MessageController from '../controller/message'

const router  = express.Router()

router.get( '/', MessageController.getMessages);

router.get( '/:id', MessageController.getMessage);

router.post( '/', MessageController.createMessage);

router.put( '/', MessageController.updateMessage);

router.delete( '/', MessageController.deleteMessage);

export default router;