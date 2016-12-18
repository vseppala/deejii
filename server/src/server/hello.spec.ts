import * as mocha from 'mocha';
import * as chai from 'chai';
import ChaiHttp = require('chai-http');

import App from './App';

chai.use(ChaiHttp);
const expect = chai.expect;

describe('baseRoute', (): void => {

  it('Should be json', (): void => {
    chai.request(App).get('/')
      .then((res) => {
        expect(res.type).to.equal('application/json');
      });
  });

  it('Should have a message property', (): void => {
    chai.request(App).get('/')
      .then((res) => {
        expect(res.body.message).to.equal('Hello!');
      });
  });
})
