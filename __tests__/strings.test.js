const request = require('supertest');
const app = require('../src/app');

describe('/strings', () => {
  describe('GET /hello/{string}', () => {
    xit('returns "Hello world!" when passed "world"', done => {
      request(app)
        .get('/strings/hello/world')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'Hello, world!' });
          done();
        });
    });
    xit('returns "Hello, turtle!" when passed "turtle"', done => {
      request(app)
        .get('/strings/hello/turtle')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'Hello, turtle!' });
          done();
        });
    });
  });

  describe('GET /upper/{string}', () => {
    xit('returns the uppercased string hello', done => {
      request(app)
        .get('/strings/upper/hello')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'HELLO' });
          done();
        });
    });
    xit('returns the uppercased string goodbye', done => {
      request(app)
        .get('/strings/upper/goodbye')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'GOODBYE' });
          done();
        });
    });
  });

  describe('GET /lower/{string}', () => {
    xit('returns the lowercased string', done => {
      request(app)
        .get('/strings/lower/HELLO')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'hello' });
          done();
        });
    });
    xit('returns the lowercased string goodbye', done => {
      request(app)
        .get('/strings/lower/GOODBYE')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'goodbye' });
          done();
        });
    });
  });

  describe('GET /first-characters/{string}', () => {
    xit('returns the first character of the string when there is no query string', done => {
      request(app)
        .get('/strings/first-characters/hello')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'h' });
          done();
        });
    });
    xit('returns the first character of the string when there is no query string', done => {
      request(app)
        .get('/strings/first-characters/goodbye')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'g' });
          done();
        });
    });

    xit('returns the first n character of the string when passed a query parameter', done => {
      request(app)
        .get('/strings/first-characters/sd32fg45')
        .query({ length: 4 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'sd32' });
          done();
        });
    });
  });
});
