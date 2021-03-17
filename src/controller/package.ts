import PackageService from '../services/package.service'
import { Request, Response } from 'express';

const getPackages = async ( req: Request, res: Response ) : Promise<any> => {
    let packages = await PackageService.getPackages()

    return res.send( packages )
}

const getPackage = async ( req: Request, res: Response ) : Promise<any> => {
    let packag = await PackageService.getPackage(req.params.id)

    return res.send( packag )
}

const createPackage = async ( req: Request, res: Response ) : Promise<any> => {
    let packag = await PackageService.createPackage(req.body)

    res.send(packag)
}

const updatePackage = async ( req: Request, res: Response ) : Promise<any> => {
    let id = req.params.id
    let packag = await PackageService.updatePackage(req.params.id,req.body)

    res.send(packag)
}   

const deletePackage = async ( req: Request, res: Response ) : Promise<any> => {
    let packag =  await PackageService.deletePackage(req.params.id)

    if ( !packag )
        return res.status(404).send("The package with the given ID was not found.");

    res.send(packag)
}

export default {
    getPackages,
    getPackage,
    createPackage,
    updatePackage,
    deletePackage
}