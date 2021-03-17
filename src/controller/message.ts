import MessageService from '../services/message.service'
import { Request, Response } from 'express';

class MessageController {

    public getMessages = async ( req: Request, res: Response ) : Promise<any> => {
        let messages = await MessageService.getMessages()

        return res.send({
            'data': messages
        })
    }

    public getMessage = async ( req: Request, res: Response ) : Promise<any> => {
        let message = await MessageService.getMessage(req.params.id)

        return res.send(message)
    }

    public createMessage = async ( req: Request, res: Response ) : Promise<any> => {
        let message = await MessageService.createMessage(req.body)

        return res.send(message)
    }

    public updateMessage = async ( req: Request, res: Response ) : Promise<any> => {
        let id = req.params.id
        let message = await MessageService.updateMessage(id, req.body)

        return res.send(message)
    }

    public deleteMessage = async ( req: Request, res: Response ) : Promise<any> => {
        let message = await MessageService.deleteMessage(req.params.id)

        if ( !message )
            return res.status(404).send("The message with the given ID was not found.");

        return res.send(message)
    }   
}

export default new MessageController();

// export default {
//     getMessages,
//     getMessage,
//     createMessage,
//     updateMessage,
//     deleteMessage
// }