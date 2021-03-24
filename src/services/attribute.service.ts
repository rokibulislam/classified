import Attribute from '../models/attribute'

class AttributeService {

    public getAttributes = async () : Promise<any> => {
        try {
            let attributes = Attribute.find()
            return attributes
        } catch( error ) {

        }
    }

    public getAttribute = async ( id: string ) : Promise<any> => {
        try {
            let attribute = Attribute.findById(id)
            return attribute
        } catch( error ) {

        }
    }

    public createAttribute = async ( input: any ) : Promise<any> => {
        try {
            let attribute = new Attribute({ ...input});
            let result = attribute.save();
            return result
        } catch( error ) {

        }
    }

    public updateAttribute = async (id: string, post: any): Promise<any> => {
        try {
            let attribute = await Attribute.findOneAndUpdate( { _id: id }, post, { new: true } )
            return attribute
        } catch( error ) {

        }
    }

    public deleteAttribute = async ( id: string ) : Promise<any> => {
        try { 
            let attribute = await Attribute.findOneAndDelete( { _id: id } )
            return attribute
        } catch ( error ) {

        }
    }

    public bulkdeleteAttribute = async ( id: string ) : Promise<any> => {
        try { 
            let attribute = await Attribute.deleteMany({ _id: id })
            return attribute
        } catch ( error ) {

        }
    }
}

export default new AttributeService()