import PackageService from '../services/package.service'
import { Request, Response } from 'express';

class PackageController {
    
    public getPackages = async ( req: Request, res: Response ) : Promise<any> => {
        let packages = await PackageService.getPackages()
    
        return res.send( packages )
    }
    
    public getPackage = async ( req: Request, res: Response ) : Promise<any> => {
        let packag = await PackageService.getPackage(req.params.id)
    
        return res.send( packag )
    }
    
    public createPackage = async ( req: Request, res: Response ) : Promise<any> => {
        let packag = await PackageService.createPackage(req.body)
    
        res.send(packag)
    }
    
    public updatePackage = async ( req: Request, res: Response ) : Promise<any> => {
        let id = req.params.id
        let packag = await PackageService.updatePackage(req.params.id,req.body)
    
        res.send(packag)
    }   
    
    public deletePackage = async ( req: Request, res: Response ) : Promise<any> => {
        let packag =  await PackageService.deletePackage(req.params.id)
    
        if ( !packag )
            return res.status(404).send("The package with the given ID was not found.");
    
        res.send(packag)
    }
}

export default new PackageController();

/*
export default {
    getPackages,
    getPackage,
    createPackage,
    updatePackage,
    deletePackage
}
*/