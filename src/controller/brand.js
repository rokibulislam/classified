const BrandService = require('../services/brand.service')

const getBrands = async ( req, res ) => {
    let brands = await BrandService.getBrands();

    return res.send({
        'data': brands
    })
}

const getBrand = async ( req, res ) => {
    let brand = await BrandService.getBrand(req.params.id)

    return res.send(brand)
}

const createBrand = async ( req, res ) => {
    let brand = await BrandService.createBrand(req.body)

    return res.send(brand)
}

const updateBrand = async ( req, res ) => {
    let brand = await BrandService.updateBrand(req.body)

    return res.send(brand)
}

const deleteBrand = async ( req, res ) => {
    let brand = await BrandService.deleteBrand(req.params.id)

    if ( !brand )
        return res.status(404).send("The brand with the given ID was not found.");

    return res.send(brand)
}

module.exports = {
    getBrands,
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand
}