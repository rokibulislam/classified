import Tag from '../models/tag'

class TagService {

    public getTags = async () => {
        return Tag.find()
    }

    public getTag = async ( id: string ) : Promise<any> => {
        return Tag.findById(id)
    }

    public createTag = async ( input: any ) : Promise<any> => {
        let tag = new Tag({ ...input});
        let result = tag.save();
        
        return result
    }

    public updateTag = async (id: string, post: any): Promise<any> => {
        return Tag.findOneAndUpdate( { _id: id }, post, { new: true } )
    }

    public deleteTag = async ( id: string ) : Promise<any> => {
        return Tag.findOneAndDelete( { _id: id } )
    }

    public getbatchTags = async ( tagIds : any) : Promise<any> => {
        // console.log('keys====', userIds);
        const tags = await Tag.find({ _id: { $in: tagIds } });
        return tags;
        // return userIds.map(userId => users.find(user => user.id === userId));
    }

    public bulkdeleteTag = async ( id: string ) => {
        return await Tag.deleteMany({ _id: id })
    }
}

export default new TagService()

/*
export default {
    getTags,
    getTag,
    createTag,
    updateTag,
    deleteTag,
    getbatchTags,
    bulkdeleteTag
}
*/