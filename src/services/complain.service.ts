import Complain  from '../models/complain'

class ComplainService {

    public getComplains = async () : Promise<any> => {
        return Complain.find()
    }
    
    public getComplain = async ( id: string ) : Promise<any> => {
        return Complain.findById(id)
    }
    
    public createComplain = async ( input: any ) : Promise<any> => {
        let complain = new Complain({ ...input});
        let result = complain.save();
        
        return result
    }
    
    public updateComplain = async (id: string, post: any): Promise<any> => {
        return Complain.findOneAndUpdate( { _id: id }, post, { new: true } )
    }
    
    public deleteComplain = async ( id: string ) : Promise<any> => {
        return Complain.findOneAndDelete( { _id: id } )
    }
    
    public bulkdeleteComplain = async ( id: string ) : Promise<any> => {
        return Complain.deleteMany({ _id: id })
    }
}

export default new ComplainService()

/*
export default {
    getComplains,
    getComplain,
    createComplain,
    updateComplain,
    deleteComplain,
    bulkdeleteComplain
}
*/