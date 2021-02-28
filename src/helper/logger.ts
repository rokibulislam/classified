import { createLogger, format, transports } from 'winston';
 
export const logger = createLogger({
  level: 'debug',
  format: format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});