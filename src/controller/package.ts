import PackageService from '../services/package.service'
import { Request, Response } from 'express';

class PackageController {
    service: any;
    
    constructor() {
        this.service  = PackageService;
    }

    public getPackages = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let cursor = req.query.cursor ? req.query.cursor : '';
            let limit = req.query.limit ? req.query.limit : 10;
            let order = req.query.order ? req.query.order : 'asc';
            let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
            
            let packages = await this.service.getPackages( cursor, limit, sortBy, order )
            return res.json( packages )
        } catch( error ) {

        }
    }
    
    public getPackage = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let packag = await this.service.getPackage(req.params.id)
            
            return res.json( packag )
        } catch( error ) {

        }
    }
    
    public createPackage = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let packag = await this.service.createPackage(req.body)
            res.json(packag)
        } catch( error ) {

        }
    }
    
    public updatePackage = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let id = req.params.id
            let packag = await this.service.updatePackage(req.params.id,req.body)
    
            res.json(packag)
        } catch( error ) {

        }
    }   
    
    public deletePackage = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let packag =  await this.service.deletePackage(req.params.id)
    
            if ( !packag )
                return res.status(404).json("The package with the given ID was not found.");
        
            res.send(packag)
        } catch( error ) {

        }
    }
}

export default new PackageController();