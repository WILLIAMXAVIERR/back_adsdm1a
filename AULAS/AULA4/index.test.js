const supertest = require("supertest");

const app = require("./index");

const request = supertest(app);

test("Retornar 200 no GET /", async function(){

    const responder = await request.get("/")
    expect(responder.status).toBe(200);
});