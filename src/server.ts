import mongoose from 'mongoose';
import app from './app';
import config from './congif/index';

//database connection
async function Database() {
  try {
    await mongoose.connect(config.database_url as string);
    // console.log(` Database connection successful`);

    app.listen(config.port, () => {
      // console.log(`Server is  listening on port ${config.port}`);
    });
  } catch (err) {
    // console.log(`Failed to connect database`, err);
  }
}

Database();
