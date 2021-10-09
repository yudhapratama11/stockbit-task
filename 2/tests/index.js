const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

describe("Todos", () => {
  describe("GET /", () => {
    it("should get detail", (done) => {
      const apikey = "94e61a2e"
      const imdb = "tt9376612"
      chai.request(app)
        .get(`/detail/?apikey=${apikey}&i=${imdb}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it("should showing search", (done) => {
      const apikey = "94e61a2e"
      const search = "Shang Chi"
      chai.request(app)
        .get(`/search/?apikey=${apikey}&s=${search}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it("should showing bad request", (done) => {
      chai.request(app)
        .get(`/search/`)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});