const mongoose = require('mongoose');
const colors = require('colors');

module.exports = async (server) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    if (conn) {
      console.log('mongo connection successful..'.yellow);
      server.listen(process.env.PORT || 5000, () =>
        console.log(
          `server running on ${process.env.NODE_ENV} mode, port ${process.env.PORT}..`
            .yellow
        )
      );
    }
  } catch (error) {
    console.log('mongo connection failed..'.red);
    process.exit(1);
  }
};
