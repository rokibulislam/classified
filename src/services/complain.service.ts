import Complain  from '../models/complain'
const { stringToBase64, base64ToString  } = require('../helper/index')

interface Iquery {
    _id?: any
}

class ComplainService {

    public getComplains = async ( cursor : any, limit : any, sortBy: string ,order: string  ) : Promise<any> => {
        try {
            const query: Iquery  = { }

            if (cursor) {
                query['_id'] = {
                    '$lt': base64ToString(cursor)
                }
            }

            let lim = parseInt( limit ) + 1

            let complains = await Complain.find()

            const hasNextPage = complains.length > limit;
            complains = hasNextPage ? complains.slice(0, -1) : complains;

            return {
                complainFeed: complains,
                pageInfo : {
                    nextPageCursor: hasNextPage ? stringToBase64(complains[complains.length - 1].id) : null,
                    hasNextPage: hasNextPage
                }
            }
        } catch( error ) {

        }
    }
    
    public getComplain = async ( id: string ) : Promise<any> => {
        try {
            let complain = await Complain.findById(id)
            return complain
        } catch( error ) {

        }
    }
    
    public createComplain = async ( input: any ) : Promise<any> => {
        try {
            let complain = new Complain({ ...input});
            let result = await complain.save();
            
            return result
        } catch( error ) {

        }
    }
    
    public updateComplain = async (id: string, post: any): Promise<any> => {
        try {
            let complain = await Complain.findOneAndUpdate( { _id: id }, post, { new: true } )
            return complain
        } catch( error ) {

        }
    }
    
    public deleteComplain = async ( id: string ) : Promise<any> => {
        try {
            let complain = await Complain.findOneAndDelete( { _id: id } )
            return complain
        } catch( error ) {

        }
    }
    
    public bulkdeleteComplain = async ( id: string ) : Promise<any> => {
        try {
            let complain = await Complain.deleteMany({ _id: id })
            return complain
        } catch( error ) {

        }
    }
}

export default new ComplainService()