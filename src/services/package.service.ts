import Package from '../models/package'
const { stringToBase64, base64ToString  } = require('../helper/index')

interface Iquery {
    _id?: any
}

class PackageService {

    public getPackages = async ( cursor : any, limit : any, sortBy: string ,order: string ) : Promise<any> => {
        try {
            const query: Iquery  = { }

            if (cursor) {
                query['_id'] = {
                    '$lt': base64ToString(cursor)
                }
            }

            let lim = parseInt( limit ) + 1

            let packages =  await Package.find().sort({ _id: -1 }).limit( lim );

            const hasNextPage = packages.length > limit;
            packages = hasNextPage ? packages.slice(0, -1) : packages;

            return {
                packageFeed: packages,
                pageInfo : {
                    nextPageCursor: hasNextPage ? stringToBase64(packages[packages.length - 1].id) : null,
                    hasNextPage: hasNextPage
                }
            }
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
            let result = await pack.save();
        
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