import Message from '../models/message'
const { stringToBase64, base64ToString  } = require('../helper/index')

interface Iquery {
    _id?: any
}

class MessageService {

    public getMessages = async ( cursor : any, limit : any ) : Promise<any> => {
        try {
            const query: Iquery  = { }

            if (cursor) {
                query['_id'] = {
                    '$lt': base64ToString(cursor)
                }
            }

            let lim = parseInt( limit ) + 1

            let messages = await Message.find().sort({ _id: -1 }).limit( lim );
            
            const hasNextPage = messages.length > limit;
            messages = hasNextPage ? messages.slice(0, -1) : messages;

            return {
                packageFeed: messages,
                pageInfo : {
                    nextPageCursor: hasNextPage ? stringToBase64(messages[messages.length - 1].id) : null,
                    hasNextPage: hasNextPage
                }
            }

            return messages
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
            let result = await message.save();
        
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