import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import logger, { errorlogger } from './shared/logger';

//database connection
async function Database() {
  try {
    await mongoose.connect(config.database_url as string);
    // console.log(` Database connection successful`);

    app.listen(config.port, () => {
      logger.info(`Server is  listening on port ${config.port}`);
    });
  } catch (err) {
    errorlogger.error(`Failed to connect database`, err);
  }
}

Database();
