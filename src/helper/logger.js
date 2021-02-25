const { createLogger, format, transports } = require('winston');
 
exports.logger = createLogger({
  level: 'debug',
  format: format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});
 
if (process.env.NODE_ENV !== 'production') {
  // logger.add(new transports.Console({
  //   format: format.simple(),
  // }));
}