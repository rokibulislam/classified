import Category from '../models/category'

class CategoryService {

    public getCategories = async () : Promise<any> => {
        try {
            let categories = await Category.find()
            return categories
        } catch(error) {

        }
    }
    
    public getCategory = async ( id: string ) : Promise<any> => {
        try {
            let category = await Category.findById(id)
            return category;
        } catch( error ) {

        }
    }
    
    public createCategory = async ( input: any ) : Promise<any> => {
        try {
            let category = new Category({ ...input});
            let result = category.save();
        
            return result
        } catch( error ) {

        }
    }
    
    public updateCategory = async (id: string, post: any): Promise<any> => {
        try {
            let category = await Category.findOneAndUpdate( { _id: id }, post, { new: true } )
            return category
        } catch( error ) {

        }
    }
    
    public deleteCategory = async ( id: string ) : Promise<any> => {
        try {
            let category = await Category.findOneAndDelete( { _id: id } )
            return category
        } catch(error) {

        } 
    }
    
    public getbatchCategories = async ( categoryIds : any) : Promise<any>=> { 
        try {
            // console.log('keys====', userIds);
            const categories = await Category.find({ _id: { $in: categoryIds } });
            return categories;
            // return userIds.map(userId => users.find(user => user.id === userId));
        } catch( error ) {

        }
    }
    
    public bulkdeleteCategory = async ( id: string ) : Promise<any> => {
        try {
             let category = await Category.deleteMany({ _id: id })
             return category
        } catch( error ) {

        }
    }
}

export default new CategoryService()
