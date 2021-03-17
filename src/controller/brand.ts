import BrandService from '../services/brand.service'
import { Request, Response } from 'express';

class BrandController {
    
    public getBrands = async ( req: Request, res: Response ) : Promise<any> => {
        let brands = await BrandService.getBrands();
    
        return res.send({
            'data': brands
        })
    }
    
    public getBrand = async ( req: Request, res: Response ) : Promise<any> => {
        let brand = await BrandService.getBrand(req.params.id)
    
        return res.send(brand)
    }
    
    public createBrand = async ( req: Request, res: Response ) : Promise<any> => {
        let brand = await BrandService.createBrand(req.body)
    
        return res.send(brand)
    }
    
    public updateBrand = async ( req: Request, res: Response ) : Promise<any> => {
        let id = req.params.id
        let brand = await BrandService.updateBrand(id,req.body)
    
        return res.send(brand)
    }
    
    public deleteBrand = async ( req: Request, res: Response ) : Promise<any> => {
        let brand = await BrandService.deleteBrand(req.params.id)
    
        if ( !brand )
            return res.status(404).send("The brand with the given ID was not found.");
    
        return res.send(brand)
    }
}

export default new BrandController();

/*
export default {
    getBrands,
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand
}
*/