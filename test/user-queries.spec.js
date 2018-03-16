import chai from 'chai';
import chaiHttp from 'chai-http';

import User from '../src/models/user';

import server from '../src';

const { expect } = chai;
const should = chai.should();
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

describe('User Query', () => {
    it('Request User by ID', () => {
        const query = `
            user(id: "58238f9c81164a0ba9e31617") {
                _id
            }
        `;

        chai
            .request(server)
            .post('/graphql')
            .send({ query })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.data.user.should.be.a('object');
                expect(res.body.data.user).has.property('_id');
                return done();
            });
    });
});
