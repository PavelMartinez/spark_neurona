import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) throw new Error("MONGO_URL is not defined.");

declare global {
  var mongoose: any;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log("cached")
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      return mongoose;
    });
    console.log("connected")
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export { dbConnect };