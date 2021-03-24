import Brand from '../models/brand'

class BrandService {

    public getBrands = async () : Promise<any> => {
        try {
            let brands = await Brand.find()
            return brands
        } catch( error ) {

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
            let result = brand.save();
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