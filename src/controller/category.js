const CategoryService = require('../services/category.service')

const getCategories = async ( req, res ) => {
    let categories = await CategoryService.getCategories()
   
    return res.send({
        'data': categories
    })
}

const getCategory = async ( req, res ) => {
    let category = await CategoryService.getCategory(req.params.id);
  
    return res.send(category)
}

const createCategory = async ( req, res ) => {
    let category = await CategoryService.createCategory(req.body)

    return res.send(category)
}

const updateCategory = async ( req, res ) => {
    let category = await CategoryService.updateCategory(req.body)

    return res.send(category)
}

const deleteCategory = async ( req, res ) => {
    let category = await CategoryService.deleteCategory(req.params.id)

    if ( !category )
        return res.status(404).send("The category with the given ID was not found.");

    return res.send(category)
}

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}