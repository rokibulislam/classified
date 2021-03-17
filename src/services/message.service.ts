import Message from '../models/message'

class MessageController {

    public getMessages = async () => {
        return Message.find()
    }

    public getMessage = async ( id: string) => {
        return Message.findById(id)
    }

    public createMessage= async ( input: any ) : Promise<any> => {
        let message = new Message({ ...input});
        let result = message.save();
        
        return result
    }

    public updateMessage = async (id: string, post: any): Promise<any> => {
        return Message.findOneAndUpdate( { _id: id }, post, { new: true } )
    }

    public deleteMessage = async ( id: string ) : Promise<any> => {
        return Message.findOneAndDelete( { _id: id } )
    }
}

export default new MessageController()

/*
export default {
    getMessages,
    getMessage,
    createMessage,
    updateMessage,
    deleteMessage,
}
*/
