const Brand = require ('../models/brand')

const getBrands = async () => {
    let result = await Brand.find()

    return result
}

const getBrand = async (id) => {
    let result =  await Brand.findById(id)

    return result
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

const bulkdeleteBrand = async ( id ) => {
    return Brand.deleteMany({ _id: id })
}

module.exports = {
    getBrands,
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand,
    getbatchBrands,
    bulkdeleteBrand
}
