const Complain = require ('../models/complain')

const getComplains = async () => {
    return Complain.find()
}

const getComplain = async (id) => {
    return Complain.findById(id)
}

const createComplain = async ( input ) => {
    let complain = new Complain({ ...input});
    let result = complain.save();
    
    return result
}

const updateComplain = async ( id, post ) => {
    return Complain.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteComplain = async ( id ) => {
    return Complain.findOneAndDelete( { _id: id } )
}

module.exports = {
    getComplains,
    getComplain,
    createComplain,
    updateComplain,
    deleteComplain,
}
