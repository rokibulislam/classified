import BrandService from '../services/brand.service'
import { Request, Response } from 'express';

const getBrands = async ( req: Request, res: Response ) : Promise<any> => {
    let brands = await BrandService.getBrands();

    return res.send({
        'data': brands
    })
}

const getBrand = async ( req: Request, res: Response ) : Promise<any> => {
    let brand = await BrandService.getBrand(req.params.id)

    return res.send(brand)
}

const createBrand = async ( req: Request, res: Response ) : Promise<any> => {
    let brand = await BrandService.createBrand(req.body)

    return res.send(brand)
}

const updateBrand = async ( req: Request, res: Response ) : Promise<any> => {
    let id = req.params.id
    let brand = await BrandService.updateBrand(id,req.body)

    return res.send(brand)
}

const deleteBrand = async ( req: Request, res: Response ) : Promise<any> => {
    let brand = await BrandService.deleteBrand(req.params.id)

    if ( !brand )
        return res.status(404).send("The brand with the given ID was not found.");

    return res.send(brand)
}

export default {
    getBrands,
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand
}