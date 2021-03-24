import Package from '../models/package'

class PackageService {

    public getPackages = async () : Promise<any> => {
        try {
            let packages = await Package.find()
            return packages
        } catch( error ) {

        }
    }

    public getPackage = async ( id: string ) : Promise<any> => {
        try {
            let packag = await Package.findById(id)
            return packag
        } catch( error ) {

        }
    }

    public createPackage = async ( input: any ) : Promise<any> => {
        try {
            let pack = new Package({ ...input});
            let result = pack.save();
        
            return result
        } catch( error ) {

        }
    }

    public updatePackage = async (id: string, post: any): Promise<any> => {
        try {
             let packag =  await Package.findOneAndUpdate( { _id: id }, post, { new: true } )
             return packag
        } catch( error ) {

        }
    }

    public deletePackage = async ( id: string ) : Promise<any> => {
        try {
            let packag =  await Package.findOneAndDelete( { _id: id } )
            return packag
        } catch( error ) {

        }
    }

    public bulkdeletePackage = async ( id: string ) : Promise<any> => {
        try {
            let packag =  await Package.deleteMany({ _id: id })
            return packag
        } catch( error ) {

        }
    }
}

export default new PackageService()