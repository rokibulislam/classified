const MessageService = require('../services/message.service')

const getMessages = async ( req, res ) => {
    let messages = await MessageService.getMessages()

    return res.send({
        'data': messages
    })
}

const getMessage = async ( req, res ) => {
    let message = await MessageService.getMessage(req.params.id)

    return res.send(message)
}

const createMessage = async ( req, res ) => {
    let message = await MessageService.createMessage(req.body)

    return res.send(message)
}

const updateMessage = async ( req, res ) => {
    let message = await MessageService.updateMessage(req.body)

    return res.send(message)
}

const deleteMessage = async ( req, res ) => {
    let message = await MessageService.deleteMessage(req.params.id)

    if ( !message )
        return res.status(404).send("The message with the given ID was not found.");

    return res.send(message)
}

module.exports = {
    getMessages,
    getMessage,
    createMessage,
    updateMessage,
    deleteMessage
}