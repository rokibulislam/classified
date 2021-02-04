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

module.exports = {
    getTags,
    getTag,
    createTag,
    updateTag,
    deleteTag,
}
