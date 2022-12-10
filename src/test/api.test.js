const request = require("supertest"); 
const app = require("../app");

let elementId;

describe("API test", () =>{  
   test("Rota Get/cooperativas/all", (done) =>{
   request(app)
   .get("/cooperativas/all")
   .expect(200)
   .expect((res) =>{
      expect(res.body.lenght).not.toBe
   })
     .end((err, res) =>{
	if(err) return done(err);
	return done();
       })
  });

  test("Rota Post /users/create", (done) =>{
    request(app)
    .post("/cooperativa/add")
    .expect("Content-Type", /json/)
    .send({
        "name" : "Dona fuchico",
        "city": "Olinda",
        "state": "PE",
        "fone": "81997456209",
        "email": "fdgstka@hotmaisl.com"
    })
    .expect(201)
    .end((err, res) => {
        if(err) return done(err);
        elementId = res.body.savedCooperativa._id;
        return done();
    })
  })
})
