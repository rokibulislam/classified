import Tag from '../models/tag'

const getTags = async () => {
    return Tag.find()
}

const getTag = async ( id: string ) : Promise<any> => {
    return Tag.findById(id)
}

const createTag = async ( input: any ) : Promise<any> => {
    let tag = new Tag({ ...input});
    let result = tag.save();
    
    return result
}

const updateTag = async (id: string, post: any): Promise<any> => {
    return Tag.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteTag = async ( id: string ) : Promise<any> => {
    return Tag.findOneAndDelete( { _id: id } )
}

const getbatchTags = async ( tagIds : any) : Promise<any> => {
    // console.log('keys====', userIds);
    const tags = await Tag.find({ _id: { $in: tagIds } });
    return tags;
    // return userIds.map(userId => users.find(user => user.id === userId));
}


const bulkdeleteTag = async ( id: string ) => {
    return await Tag.deleteMany({ _id: id })
}


export default {
    getTags,
    getTag,
    createTag,
    updateTag,
    deleteTag,
    getbatchTags,
    bulkdeleteTag
}