const mongoose = require('mongoose');
// const server = require('../server');

module.exports = async (server) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    if (conn) {
      console.log('mongo connection successful..');
      server.listen(process.env.PORT || 5000, () =>
        console.log(
          `server running on ${process.env.NODE_ENV} mode, port ${process.env.PORT}..`
        )
      );
    }
  } catch (error) {
    console.log('mongo connection failed..');
    process.exit(1);
  }
};
