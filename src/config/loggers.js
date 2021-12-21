import winston from 'winston'
import expressWinston from 'express-winston'

export const getLoggerMiddleware = () => {
  return expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.simple(),
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
    colorize: true,
    ignoreRoute: () => false,
  })
}
