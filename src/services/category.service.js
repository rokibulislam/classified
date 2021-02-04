const Category = require ('../models/category')

const getCategories = async () => {
    return Category.find()
}

const getCategory = async (id) => {
    return Category.findById(id)
}

const createCategory = async ( input ) => {
    let category = new Category({ ...input});
    let result = category.save();
    
    return result
}

const updateCategory = async ( id, post ) => {
    return Category.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteCategory = async ( id ) => {
    return Category.findOneAndDelete( { _id: id } )
}

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
}
