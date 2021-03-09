const AttributeService = require('../services/attribute.service')

const getAttributes =  async ( req, res ) => {
    let attributes = await AttributeService.getAttributes();

    return res.send( 
        {
            'data': attributes
        }
    )
}

const getAttribute = async ( req, res ) => {
    let attribute = await AttributeService.getAttribute( req.params.id )

    return res.send( attribute )
}

const createAttribute = async ( req, res ) => {
    let attribute = await AttributeService.createAttribute(req.body)

    return res.send(attribute);
}

const updateAttribute = async ( req, res ) => {
    let attribute = await AttributeService.updateAttribute(req.body)

    return res.send(attribute);
}

const deleteAttribute = async ( req, res ) => {
    let attribute = await AttributeService.deleteAttribute(req.params.id)

    if ( !attribute )
        return res.status(404).send("The attribute with the given ID was not found.");

    return res.send(attribute)
}

module.exports = {
    getAttributes,
    getAttribute,
    createAttribute,
    updateAttribute,
    deleteAttribute
}