import Attribute from '../models/attribute'

const getAttributes = async () : Promise<any> => {
    return Attribute.find()
}

const getAttribute = async ( id: string ) : Promise<any> => {
    return Attribute.findById(id)
}

const createAttribute = async ( input: any ) : Promise<any> => {
    let attribute = new Attribute({ ...input});
    let result = attribute.save();
    
    return result
}

const updateAttribute = async (id: string, post: any): Promise<any> => {
    return Attribute.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteAttribute = async ( id: string ) : Promise<any> => {
    return Attribute.findOneAndDelete( { _id: id } )
}

export default { getAttributes, getAttribute, createAttribute, updateAttribute, deleteAttribute }
