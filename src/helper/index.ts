export const stringToBase64 = ( data: any ) => Buffer.from(data).toString('base64');
export const base64ToString = ( data: any ) => Buffer.from(data, 'base64').toString('ascii');