const Package = require ('../models/package')

const getPackages = async () => {
    return Package.find()
}

const getPackage = async (id) => {
    return Package.findById(id)
}

const createPackage = async ( input ) => {
    let package = new Package({ ...input});
    let result = package.save();
    
    return result
}

const updatePackage = async ( id, post ) => {
    return Package.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deletePackage = async ( id ) => {
    return Package.findOneAndDelete( { _id: id } )
}

const bulkdeletePackage = async ( id ) => {
    return Package.deleteMany({ _id: id })
}

module.exports = {
    getPackages,
    getPackage,
    createPackage,
    updatePackage,
    deletePackage,
    bulkdeletePackage
}
