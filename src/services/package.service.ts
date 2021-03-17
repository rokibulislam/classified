import Package from '../models/package'

class PackageService {

    public getPackages = async () : Promise<any> => {
        return Package.find()
    }

    public getPackage = async ( id: string ) : Promise<any> => {
        return Package.findById(id)
    }

    public createPackage = async ( input: any ) : Promise<any> => {
        let pack = new Package({ ...input});
        let result = pack.save();
        
        return result
    }

    public updatePackage = async (id: string, post: any): Promise<any> => {
        return Package.findOneAndUpdate( { _id: id }, post, { new: true } )
    }

    public deletePackage = async ( id: string ) : Promise<any> => {
        return Package.findOneAndDelete( { _id: id } )
    }

    public bulkdeletePackage = async ( id: string ) : Promise<any> => {
        return Package.deleteMany({ _id: id })
    }
}

export default new PackageService()

/*
export default {
    getPackages,
    getPackage,
    createPackage,
    updatePackage,
    deletePackage,
    bulkdeletePackage
}
*/

