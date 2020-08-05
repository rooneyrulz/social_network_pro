import mongoose from 'mongoose';
// import server from '../server';

export default async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn) {
      console.log('mongo connection successful..');
      // server.listen(process.env.PORT || 5000, () =>
      //   console.log(
      //     `server running on ${process.env.NODE_ENV} mode, port ${process.env.PORT}..`
      //   )
      // );
    }
  } catch (error) {
    console.log('mongo connection failed..');
    process.exit(1);
  }
};
