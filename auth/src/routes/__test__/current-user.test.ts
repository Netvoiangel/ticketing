import request from 'supertest';
import { app } from '../../app';
import { signin } from '../../test/setup';

it('response with detaild about the current user', async () => {
    const cookie = await signin();

    if (cookie) {
        const response = await request(app)
            .get('/api/users/currentuser')
            .set('Cookie', cookie)
            .send()
            .expect(200);

        expect(response.body.currentUser.email).toEqual('test@test.com');
    }
});

it('response with null if not authentificated', async () => {
    const response = await request(app)
        .get('/api/users/currentuser')
        .send()
        .expect(200);

        expect(response.body.currentUser).toEqual(null);
});

