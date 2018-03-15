import chai from 'chai';
import chaiHttp from 'chai-http';

import User from '../src/models/user';

import server from '../src';

const { expect } = chai;
chai.use(chaiHttp);

describe('Users Queries', () => {
    it('Request all users', done => {
        const query = 'query { users { firstName, lastName, email } }';

        chai
            .request(server)
            .post('/graphql')
            .send({ query })
            .end((err, res) => {
                expect(res).have.status(200);
                expect(res.body).be.a('object');
                expect(res.body.data.users).be.a('array');
                return done();
            });
    });
});
