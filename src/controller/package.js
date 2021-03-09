const PackageService = require('../services/package.service')

const getPackages = async ( req, res ) => {
    let packages = await PackageService.getPackages()

    return res.send( packages )
}

const getPackage = async ( req, res ) => {
    let package = await PackageService.getPackage(req.params.id)

    return res.send( package )
}

const createPackage = async ( req, res ) => {
    let package = await PackageService.createPackage(req.body)

    res.send(package)
}

const updatePackage = async ( req, res ) => {
    let package = PackageService.updatePackage(req.body)

    res.send(package)
}   

const deletePackage = async ( req, res ) => {
    let package =  PackageService.deletePackage(req.params.id)

    if ( !package )
        return res.status(404).send("The package with the given ID was not found.");

    res.send(package)
}

module.exports = {
    getPackages,
    getPackage,
    createPackage,
    updatePackage,
    deletePackage
}