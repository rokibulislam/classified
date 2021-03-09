const Category = require ('../models/category')

const getCategories = async () => {
    return Category.find()
}

const getCategory = async (id) => {
    const category = await Category.findById(id)
    return category;
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

const getbatchCategories = async (categoryIds) => {
    // console.log('keys====', userIds);
    const categories = await Category.find({ _id: { $in: categoryIds } });
   
    return categories;
    // return userIds.map(userId => users.find(user => user.id === userId));
}

const bulkdeleteCategory = async ( id ) => {
    return Category.deleteMany({ _id: id })
}

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getbatchCategories,
    bulkdeleteCategory
}
