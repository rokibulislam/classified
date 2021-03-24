import Message from '../models/message'

class MessageService {

    public getMessages = async () => {
        try {
          let message = await Message.find()
          return message
        } catch( error ) {

        }
    }

    public getMessage = async ( id: string) => {
        try {
            let message = await Message.findById(id)
            return message
        } catch( error ) {

        }
    }

    public createMessage= async ( input: any ) : Promise<any> => {
        try {
            let message = new Message({ ...input});
            let result = message.save();
        
            return result
        } catch( error ) {

        }
    }

    public updateMessage = async (id: string, post: any): Promise<any> => {
        try {
            let message =  await Message.findOneAndUpdate( { _id: id }, post, { new: true } )
            return message
        } catch( error ) {

        }
        
    }

    public deleteMessage = async ( id: string ) : Promise<any> => {
        try {
            let message =  await Message.findOneAndDelete( { _id: id } )
            return message
        } catch( error ) {

        }
    }
}

export default new MessageService()