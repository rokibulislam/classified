import Package from '../models/package'

const getPackages = async () : Promise<any> => {
    return Package.find()
}

const getPackage = async ( id: string ) : Promise<any> => {
    return Package.findById(id)
}

const createPackage = async ( input: any ) : Promise<any> => {
    let pack = new Package({ ...input});
    let result = pack.save();
    
    return result
}

const updatePackage = async (id: string, post: any): Promise<any> => {
    return Package.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deletePackage = async ( id: string ) : Promise<any> => {
    return Package.findOneAndDelete( { _id: id } )
}

const bulkdeletePackage = async ( id: string ) : Promise<any> => {
    return Package.deleteMany({ _id: id })
}

export default {
    getPackages,
    getPackage,
    createPackage,
    updatePackage,
    deletePackage,
    bulkdeletePackage
}


