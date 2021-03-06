const test = require("tape");
const supertest = require("supertest");
const router = require("./src/router.js");

test("tape is working", t => {
  t.equal(1, 1, "one is equal to one");
  t.end();
});

test("GET Home route returns a status code of 200", t => {
  supertest(router)
    .get("/") // this specifies a GET request, use .post() otherwise
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.end();
    });
});

test("GET api route returns a status code of 200", t => {
  supertest(router)
    .get("/apiHandler")
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.end();
    });
});

test("Invalid url returns 404", t => {
  supertest(router)
    .get("/bananan")
    .expect(404)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 404, "Should return 404");
      t.end();
    });
});

test("Check that public path works by calling css", t => {
  supertest(router)
    .get("/public/style.css")
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.end();
    });
});
