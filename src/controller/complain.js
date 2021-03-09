const ComplainService = require('../services/complain.service')

const getComplains = async ( req, res ) => {
    let complains = await ComplainService.getComplains()

    return res.send({
        'data': complains
    });
}

const getComplain = async ( req, res ) => {
    let complain = await ComplainService.getComplain(req.params.id)

    return res.send(complain)
}

const createComplain = async ( req, res ) => {
    let complain = await ComplainService.createComplain(req.body)

    return res.send(complain)
}

const updateComplain = async ( req, res ) => {
    let complain = await ComplainService.updateComplain(req.body)

    return res.send(complain)
}

const deleteComplain = async( req, res ) => {
    let complain = await ComplainService.deleteComplain(req.params.id)

    if ( !complain )
        return res.status(404).send("The complain with the given ID was not found.");

    return res.send(complain)
}

module.exports = {
    getComplains,
    getComplain,
    createComplain,
    updateComplain,
    deleteComplain
}