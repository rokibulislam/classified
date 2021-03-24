import CategoryService from '../services/category.service'
import { Request, Response } from 'express';

class CategoryController {
    service: any;

    constructor() {
        this.service  = CategoryService;
    }

    public getCategories = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let categories = await this.service.getCategories()
            return res.send({
                'data': categories
            })
        } catch(error) {

        }
    }

    public getCategory = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let category = await this.service.getCategory(req.params.id);
            return res.send(category)
        } catch(error) {

        }
    }

    public createCategory = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let category = await this.service.createCategory(req.body)
            return res.send(category)
        } catch(error) {

        }
    }

    public updateCategory = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let id = req.params.id;
            let category = await this.service.updateCategory( id,req.body )
            return res.send(category)
        } catch(error) {

        }
    }

    public deleteCategory = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let category = await this.service.deleteCategory(req.params.id)
            if ( !category )
                return res.status(404).send("The category with the given ID was not found.");
            return res.send(category)
        } catch(error) {
            
        }
    }
}

export default new CategoryController();