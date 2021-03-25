import BrandService from '../services/brand.service'
import { Request, Response } from 'express';

class BrandController {
    service: any;

    constructor() {
        this.service  = BrandService;
    }

    public getBrands = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let cursor = req.query.cursor ? req.query.cursor : '';
            let limit  = req.query.limit ? req.query.limit : 10;
            let order  = req.query.order ? req.query.order : 'asc';
            let sortBy = req.query.sortBy ? req.query.sortBy : '_id';

            let brands = await this.service.getBrands( cursor, limit, sortBy, order );
            return res.json({
                'data': brands
            })
        } catch(error) {

        }
    }
    
    public getBrand = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let brand = await this.service.getBrand(req.params.id)
            return res.json(brand)
        } catch(error) {

        }
    }
    
    public createBrand = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let brand = await this.service.createBrand(req.body)
            return res.json(brand)
        } catch(error) {

        }
    }
    
    public updateBrand = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let id = req.params.id
            let brand = await this.service.updateBrand(id,req.body)
            return res.json(brand)
        } catch(error) {

        }
    }
    
    public deleteBrand = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let brand = await this.service.deleteBrand(req.params.id)
            if ( !brand )
                return res.status(404).send("The brand with the given ID was not found.");
            return res.json(brand)
        } catch(error) { 

        }
    }
}

export default new BrandController();