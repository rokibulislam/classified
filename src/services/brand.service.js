const Brand = require ('../models/brand')

const getBrands = async () => {
    return Brand.find()
}

const getBrand = async (id) => {
    return Brand.findById(id)
}

const createBrand = async ( input ) => {
    let brand = new Brand({ ...input});
    let result = brand.save();
    
    return result
}

const updateBrand = async ( id, post ) => {
    return Brand.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteBrand = async ( id ) => {
    return Brand.findOneAndDelete( { _id: id } )
}

const getbatchBrands = async (brandIds) => {
    // console.log('keys====', userIds);
    const brands = await Brand.find({ _id: { $in: brandIds } });
    return brands;
    // return userIds.map(userId => users.find(user => user.id === userId));
}


module.exports = {
    getBrands,
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand,
    getbatchBrands
}
