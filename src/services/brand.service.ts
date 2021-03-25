import Brand from '../models/brand'
const { stringToBase64, base64ToString  } = require('../helper/index')

interface Iquery {
    _id?: any
}

class BrandService {

    public getBrands = async ( cursor : any, limit : any, sortBy: string ,order: string ) : Promise<any> => {
        try {
            const query: Iquery  = { }

            if (cursor) {
                query['_id'] = {
                    '$lt': base64ToString(cursor)
                }
            }

            let lim = parseInt( limit ) + 1

            let brands = await Brand.find().limit(lim)

            const hasNextPage = brands.length > limit;
            brands = hasNextPage ? brands.slice(0, -1) : brands;

            return {
                brandFeed: brands,
                pageInfo : {
                    nextPageCursor: hasNextPage ? stringToBase64(brands[brands.length - 1].id) : null,
                    hasNextPage: hasNextPage
                }
            }
        } catch(error) {

        }
    }

    public getBrand = async ( id: string ) : Promise<any> => {
        try {
            let brand = await Brand.findById(id)
            return brand
        } catch( error ) {
            
        }
    }

    public createBrand = async ( input: any ) : Promise<any> => {
        try {
            let brand = new Brand({ ...input});
            let result = await brand.save();
            return result
        } catch( error ) {

        }
    }

    public updateBrand = async (id: string, post: any): Promise<any> => {
        try {
            let brand = await Brand.findOneAndUpdate( { _id: id }, post, { new: true } )
            return brand
        } catch( error ) {

        }
    }

    public deleteBrand = async ( id: string ) : Promise<any> => {
        try {
            let brand = await Brand.findOneAndDelete( { _id: id } )
            return brand
        } catch( error ) {

        }
    }

    public getbatchBrands = async ( brandIds: any ) : Promise<any> => {
        try {
            // console.log('keys====', userIds);
            let brands = await Brand.find({ _id: { $in: brandIds } });
            return brands;
            // return userIds.map(userId => users.find(user => user.id === userId));
        } catch( error ) {

        }
    }

    public bulkdeleteBrand = async ( id: string ) : Promise<any> => {
        try {
            let brand = await Brand.deleteMany({ _id: id })
            return brand
        } catch( error ) {

        }
    }
}

export default new BrandService();