const TagService = require('../services/tag.service')

const getTags = async ( req, res ) => {
    let tags = await TagService.getTags()

    return res.send({
        'data': tags
    })
}

const getTag = async ( req, res ) => {
    let tag = await TagService.getTag(req.params.id)

    return res.send(tag)
}

const createTag = async ( req, res ) => {
    let tag = await TagService.createTag(req.body)

    return res.send(tag)
}

const updateTag = async ( req, res ) => {
    let tag = await TagService.updateTag(req.body)

    return res.send(tag)
}

const deleteTag = async ( req, res ) => {
    let tag = await TagService.deleteTag(req.params.id)

    if ( !tag )
        return res.status(404).send("The tag with the given ID was not found.");

    res.send(tag)
}

module.exports = {
    getTags,
    getTag,
    createTag,
    updateTag,
    deleteTag
}