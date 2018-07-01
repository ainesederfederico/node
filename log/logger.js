const {
  createLogger,
  format,
  transports
} = require('winston');
const {
  combine,
  timestamp,
  label,
  printf
} = format;

const customFormat = printf(info => {
  return `${info.timestamp} | ${info.level}: ${info.message}`;
});

const consoleFormat = printf(info => {
  return ` ${info.level}: ${info.message} | ${info.timestamp} `;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    customFormat
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({
      filename: './log/error.log',
      level: 'error'
    }),
    new transports.File({
      filename: './log/combined.log'
    })
  ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// 
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: combine(
        format.colorize(),
        consoleFormat
      )
    }));
}

module.exports = logger;