const jwt = require('jsonwebtoken')

import { Request } from 'express';
import User from '../models/user'


export const verifyUser = async ( req: Request ) => {
    try {
      const bearerHeader = req.headers.authorization;
      if (bearerHeader) {
        const token = bearerHeader.split(' ')[1];
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY || 'mysecretkey');
        req.email = payload.email;
        const user = await User.findOne({ email: payload.email });
        req.loggedInUserId = user.id;
      }
    } catch (error) {
      throw error;
    }
  }