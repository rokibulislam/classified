import Attribute from '../models/attribute'

class AttributeService {

    public getAttributes = async () : Promise<any> => {
        return Attribute.find()
    }

    public getAttribute = async ( id: string ) : Promise<any> => {
        return Attribute.findById(id)
    }

    public createAttribute = async ( input: any ) : Promise<any> => {
        let attribute = new Attribute({ ...input});
        let result = attribute.save();
        
        return result
    }

    public updateAttribute = async (id: string, post: any): Promise<any> => {
        return Attribute.findOneAndUpdate( { _id: id }, post, { new: true } )
    }

    public deleteAttribute = async ( id: string ) : Promise<any> => {
        return Attribute.findOneAndDelete( { _id: id } )
    }

    public bulkdeleteAttribute = async ( id: string ) : Promise<any> => {
        return Attribute.deleteMany({ _id: id })
    }
}

export default new AttributeService()

// export default { getAttributes, getAttribute, createAttribute, updateAttribute, deleteAttribute, bulkdeleteAttribute }