require('babel/register');
const User = require('../models/user');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

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
