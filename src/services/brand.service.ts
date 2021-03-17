import Brand from '../models/brand'

class BrandService {

    public getBrands = async () : Promise<any> => {
        return Brand.find()
    }

    public getBrand = async ( id: string ) : Promise<any> => {
        return Brand.findById(id)
    }

    public createBrand = async ( input: any ) : Promise<any> => {
        let brand = new Brand({ ...input});
        let result = brand.save();
        
        return result
    }

    public updateBrand = async (id: string, post: any): Promise<any> => {
        return Brand.findOneAndUpdate( { _id: id }, post, { new: true } )
    }

    public deleteBrand = async ( id: string ) : Promise<any> => {
        return Brand.findOneAndDelete( { _id: id } )
    }

    public getbatchBrands = async ( brandIds: any ) : Promise<any> => {
        // console.log('keys====', userIds);
        const brands = await Brand.find({ _id: { $in: brandIds } });
        return brands;
        // return userIds.map(userId => users.find(user => user.id === userId));
    }

    public bulkdeleteBrand = async ( id: string ) : Promise<any> => {
        return Brand.deleteMany({ _id: id })
    }
}

export default new BrandService();

//export default { getBrands, getBrand, createBrand, updateBrand, deleteBrand, getbatchBrands, bulkdeleteBrand }