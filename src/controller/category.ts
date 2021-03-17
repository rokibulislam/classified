import CategoryService from '../services/category.service'
import { Request, Response } from 'express';

class CategoryController {

    public getCategories = async ( req: Request, res: Response ) : Promise<any> => {
        let categories = await CategoryService.getCategories()
    
        return res.send({
            'data': categories
        })
    }

    public getCategory = async ( req: Request, res: Response ) : Promise<any> => {
        let category = await CategoryService.getCategory(req.params.id);
    
        return res.send(category)
    }

    public createCategory = async ( req: Request, res: Response ) : Promise<any> => {
        let category = await CategoryService.createCategory(req.body)

        return res.send(category)
    }

    public updateCategory = async ( req: Request, res: Response ) : Promise<any> => {
        let id = req.params.id;
        let category = await CategoryService.updateCategory( id,req.body )

        return res.send(category)
    }

    public deleteCategory = async ( req: Request, res: Response ) : Promise<any> => {
        let category = await CategoryService.deleteCategory(req.params.id)

        if ( !category )
            return res.status(404).send("The category with the given ID was not found.");

        return res.send(category)
    }
}

export default new CategoryController();

/*
export default {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}
*/