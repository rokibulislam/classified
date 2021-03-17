import 'dotenv';
import mongoose from 'mongoose';

const MONGO_DB_URL = process.env.MONGO_DB_URL;

export const connection = async (): Promise<any> => {
  try {
    mongoose.set('debug', true);
    await mongoose.connect( MONGO_DB_URL as string, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database Connected Successfully');
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const isValidObjectId = (id: string) => {
  return mongoose.Types.ObjectId.isValid(id);
}