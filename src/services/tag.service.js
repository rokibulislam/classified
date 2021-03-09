const Tag = require ('../models/tag')

const getTags = async () => {
    return Tag.find()
}

const getTag = async (id) => {
    return Tag.findById(id)
}

const createTag = async ( input ) => {
    let tag = new Tag({ ...input});
    let result = tag.save();
    
    return result
}

const updateTag = async ( id, post ) => {
    return Tag.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteTag = async ( id ) => {
    return Tag.findOneAndDelete( { _id: id } )
}


const getbatchTags = async (tagIds) => {
    // console.log('keys====', userIds);
    const tags = await Tag.find({ _id: { $in: tagIds } });
    return tags;
    // return userIds.map(userId => users.find(user => user.id === userId));
}

const bulkdeleteTag = async ( id ) => {
    return await Tag.deleteMany({ _id: id })
}

module.exports = {
    getTags,
    getTag,
    createTag,
    updateTag,
    deleteTag,
    getbatchTags,
    bulkdeleteTag
}
