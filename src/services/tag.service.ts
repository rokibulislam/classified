import Tag from '../models/tag'

class TagService {

    public getTags = async () => {
        try {
            let tags =  await Tag.find()
            return tags
        } catch( error ) {

        }
    }

    public getTag = async ( id: string ) : Promise<any> => {
        try {
            let tag =  await Tag.findById(id)
            return tag
        } catch( error ) {

        }
    }

    public createTag = async ( input: any ) : Promise<any> => {
        try {
            let tag = new Tag({ ...input});
            let result = tag.save();
        
            return result
        } catch( error ) {

        }
    }

    public updateTag = async (id: string, post: any): Promise<any> => { 
        try {
            let tag = await Tag.findOneAndUpdate( { _id: id }, post, { new: true } )
            return tag
        } catch( error ) {

        }
    }

    public deleteTag = async ( id: string ) : Promise<any> => {
        try {
            let tag = await Tag.findOneAndDelete( { _id: id } )
            return tag
        } catch( error ) {

        }
    }

    public getbatchTags = async ( tagIds : any) : Promise<any> => {
        try {
            // console.log('keys====', userIds);
            const tags = await Tag.find({ _id: { $in: tagIds } });
            return tags;
            // return userIds.map(userId => users.find(user => user.id === userId));
        } catch( error ) {

        }
    }

    public bulkdeleteTag = async ( id: string ) => {
        try {
            let tag = await Tag.deleteMany({ _id: id })
            return tag
        } catch( error ) {

        }
    }
}

export default new TagService()