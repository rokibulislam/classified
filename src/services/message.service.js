const Message = require ('../models/message')

const getMessages = async () => {
    return Message.find()
}

const getMessage = async (id) => {
    return Message.findById(id)
}

const createMessage= async ( input ) => {
    let package = new Message({ ...input});
    let result = package.save();
    
    return result
}

const updateMessage = async ( id, post ) => {
    return Message.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteMessage = async ( id ) => {
    return Message.findOneAndDelete( { _id: id } )
}

module.exports = {
    getMessages,
    getMessage,
    createMessage,
    updateMessage,
    deleteMessage,
}
