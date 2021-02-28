const Brand = require ('../models/brand')

const getBrands = async () : Promise<any> => {
    return Brand.find()
}

const getBrand = async ( id: string ) : Promise<any> => {
    return Brand.findById(id)
}

const createBrand = async ( input: any ) : Promise<any> => {
    let brand = new Brand({ ...input});
    let result = brand.save();
    
    return result
}

const updateBrand = async (id: string, post: any): Promise<any> => {
    return Brand.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteBrand = async ( id: string ) : Promise<any> => {
    return Brand.findOneAndDelete( { _id: id } )
}

const getbatchBrands = async ( brandIds: any ) : Promise<any> => {
    // console.log('keys====', userIds);
    const brands = await Brand.find({ _id: { $in: brandIds } });
    return brands;
    // return userIds.map(userId => users.find(user => user.id === userId));
}


export default {
    getBrands,
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand,
    getbatchBrands
}
