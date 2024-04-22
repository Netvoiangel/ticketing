import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';

let mongo: any;
beforeAll(async () => {
    process.env.JWT_KEY = "asasda";

    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri);
});

beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

afterAll(async () => {
    await mongoose.connection.close();
    await mongo.stop();
});

const signin = async () => {
    // Build a JWT payload. { id, email }

    // Create the JWT!

    // Build session object. { jwt: MY_JWT }

    // Turn that session into JSON
    
    // Take JSON and encode it as base64

    // Return a string thats the cookie with the encoded data
};

export { signin };