import Message from '../models/message'

const getMessages = async () => {
    return Message.find()
}

const getMessage = async ( id: string) => {
    return Message.findById(id)
}

const createMessage= async ( input: any ) : Promise<any> => {
    let message = new Message({ ...input});
    let result = message.save();
    
    return result
}

const updateMessage = async (id: string, post: any): Promise<any> => {
    return Message.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteMessage = async ( id: string ) : Promise<any> => {
    return Message.findOneAndDelete( { _id: id } )
}

export default {
    getMessages,
    getMessage,
    createMessage,
    updateMessage,
    deleteMessage,
}
