const Attribute = require ('../models/attribute')

const getAttributes = async () => {
    return Attribute.find()
}

const getAttribute = async (id) => {
    return Attribute.findById(id)
}

const createAttribute = async ( input ) => {
    let attribute = new Attribute({ ...input});
    let result = attribute.save();
    
    return result
}

const updateAttribute = async ( id, post ) => {
    return Attribute.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteAttribute = async ( id ) => {
    return Attribute.findOneAndDelete( { _id: id } )
}

module.exports = {
    getAttributes,
    getAttribute,
    createAttribute,
    updateAttribute,
    deleteAttribute,
}
