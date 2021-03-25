import Category from '../models/category'
const { stringToBase64, base64ToString  } = require('../helper/index')

interface Iquery {
    _id?: any
}

class CategoryService {

    public getCategories = async ( cursor : any, limit : any, sortBy: string ,order: string ) : Promise<any> => {
        try {
            const query: Iquery  = { }

            if (cursor) {
                query['_id'] = {
                    '$lt': base64ToString(cursor)
                }
            }

            let lim = parseInt( limit ) + 1

            let categories = await Category.find()

            const hasNextPage = categories.length > limit;
            categories = hasNextPage ? categories.slice(0, -1) : categories;

            return {
                categoryFeed: categories,
                pageInfo : {
                    nextPageCursor: hasNextPage ? stringToBase64(categories[categories.length - 1].id) : null,
                    hasNextPage: hasNextPage
                }
            }
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
            let result = await category.save();
        
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
