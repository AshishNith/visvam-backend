import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/visvam";

  try {
    console.log(`[MongoDB] Connecting to database...`);
    const conn = await mongoose.connect(mongoUri, {
      maxPoolSize: 100,
      minPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      maxIdleTimeMS: 10000,
      autoIndex: true,
    });

    console.log(`[MongoDB] Connected successfully to host: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error: any) {
    console.error(`[MongoDB Error] Failed to connect to MongoDB: ${error.message}`);
    // No fallback to local memory server and no auto-seeding
  }
};
