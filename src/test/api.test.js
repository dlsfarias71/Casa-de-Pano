const request = require("supertest");
const app = require("../app");



describe("API test", () => {
  test("Rota Get /cooperativas/all", (done) => {
    request(app)

      .get("/cooperativas/all")
      .expect(200)
      .expect((res) => {
        expect(res.body.lenght).not.toBe
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  });

  let _Id;

  test("Post /cooperativas/create", (done) => {
    request(app)
      .post("/cooperativas/create")
      .expect("Content-Type"," json")
      .send({

        name: "De chita",
        city: "Paulista",
        state: "PE",
        fone: 81997454213,
        email: "chita@hotmail.com"

      })

      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        elementId = res.body.savedCooperativa._id;
        return done();
      })
  })
})
