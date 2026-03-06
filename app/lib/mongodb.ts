import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI as string;
console.log('iri',process.env)
if (!uri) {
  throw new Error('Please add your MONGODB_URI to .env.local');
}

// Log the URI (excluding the password part for safety) to verify it's loading
console.log('📡 Attempting to connect to:', uri.split('@')[1] || "Invalid URI format");

const client = new MongoClient(uri);
const clientPromise = client.connect();

// Log success or failure specifically for this connection attempt
clientPromise
  .then(() => console.log('✅ MongoDB connection established successfully'))
  .catch((err) => console.error('❌ MongoDB initial connection failed:', err.message));

export default clientPromise;