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

module.exports = {
    getBrands,
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand,
}
