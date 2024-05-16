import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';
import jwt from 'jsonwebtoken';

jest.mock('../nats-wrapper');

process.env.STRIPE_KEY = 'sk_test_51PH2ppKv0iBLv21I3lcrNHaSrUcGwDhS032V6CCkIqtPdNBnBJGA8CwAR5vxb2UK60sg3ceemNxotJkvWHQqQ7Rx00APICFnYR';

let mongo: any;
beforeAll(async () => {
    process.env.JWT_KEY = "asasda";

    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri);
});

beforeEach(async () => {
    jest.clearAllMocks();
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

afterAll(async () => {
    await mongoose.connection.close();
    await mongo.stop();
});

const signin = (id?: string) => {
    const payload = {
        id: id || new mongoose.Types.ObjectId().toHexString(),
        email: 'test@test.com'
    };

    const token = jwt.sign(payload, process.env.JWT_KEY!);

    const session = { jwt: token };

    const sessionJSON = JSON.stringify(session);
    
    const base64 = Buffer.from(sessionJSON).toString('base64');

    return [`session=${base64}`];
};

export { signin };