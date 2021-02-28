import  {Document, model, Model, Schema } from 'mongoose';

interface ICategory extends Document {
    name: string,
    description: string
}


const categorySchema = new Schema({
    
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
})

export default model<ICategory>( 'Category', categorySchema )