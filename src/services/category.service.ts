import Category from '../models/category'

const getCategories = async () : Promise<any> => {
    return Category.find()
}

const getCategory = async ( id: string ) : Promise<any> => {
    const category = await Category.findById(id)
    return category;
}

const createCategory = async ( input: any ) : Promise<any> => {
    let category = new Category({ ...input});
    let result = category.save();
    
    return result
}

const updateCategory = async (id: string, post: any): Promise<any> => {
    return Category.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteCategory = async ( id: string ) : Promise<any> => {
    return Category.findOneAndDelete( { _id: id } )
}

const getbatchCategories = async ( categoryIds : any) : Promise<any>=> {
    // console.log('keys====', userIds);
    const categories = await Category.find({ _id: { $in: categoryIds } });
    return categories;
    // return userIds.map(userId => users.find(user => user.id === userId));
}

const bulkdeleteCategory = async ( id: string ) : Promise<any> => {
    return Category.deleteMany({ _id: id })
}

export default {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getbatchCategories,
    bulkdeleteCategory
}
