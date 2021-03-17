declare global {
    declare module 'express' {
      export interface Request {
        email?: string;
        loggedInUserId?: string;
      }
    }
}