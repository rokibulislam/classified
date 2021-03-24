import Complain  from '../models/complain'

class ComplainService {

    public getComplains = async () : Promise<any> => {
        try {
            let complains = await Complain.find()
            return complains
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
            let result = complain.save();
            
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
        return Complain.deleteMany({ _id: id })
    }
}

export default new ComplainService()