import Complain  from '../models/complain'

const getComplains = async () : Promise<any> => {
    return Complain.find()
}

const getComplain = async ( id: string ) : Promise<any> => {
    return Complain.findById(id)
}

const createComplain = async ( input: any ) : Promise<any> => {
    let complain = new Complain({ ...input});
    let result = complain.save();
    
    return result
}

const updateComplain = async (id: string, post: any): Promise<any> => {
    return Complain.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteComplain = async ( id: string ) : Promise<any> => {
    return Complain.findOneAndDelete( { _id: id } )
}

const bulkdeleteComplain = async ( id: string ) : Promise<any> => {
    return Complain.deleteMany({ _id: id })
}

export default {
    getComplains,
    getComplain,
    createComplain,
    updateComplain,
    deleteComplain,
    bulkdeleteComplain
}
