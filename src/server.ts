import mongoose from 'mongoose';
import { Server } from 'http';
import app from './app';
import config from './config/index';
import logger, { errorlogger } from './shared/logger';

process.on('uncaughtException', error => {
  errorlogger.error(error);
  process.exit(1);
});

let server: Server;

//database connection
async function Database() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info(` Database connection successful`);

    app.listen(config.port, () => {
      logger.info(`Server is  listening on port ${config.port}`);
    });
  } catch (err) {
    errorlogger.error(`Failed to connect database`, err);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorlogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

Database();
process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
