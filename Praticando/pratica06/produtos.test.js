const supertest = require("supertest");
const app = require("./app");
const request = supertest(app);

test("Deve retornar status 201 no POST/produtos com um JSON", async function(){

    const response = await request.post("/produtos").send({nome: "uva", preco: 20.00});
    expect(response.status).toBe(201);
    expect(response.body).toHavePropety('id', 1);
    expect(response.body).toHavePropety('nome', "uva");
    expect(response.body).toHavePropety('preco', 20.00);
    expect(response.type).toMatch(/json/);
});

test("Deve retornar status 200 no GET/produtos com um JSON e um ARRAY", async function(){

    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.type).toMatch(/json/);
});

test("Deve retornar 200 no GET com um conteúdo JSON", async function(){

    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.body).toHavePropety('id', 1);
    expect(response.body).toHavePropety('nome', "uva");
    expect(response.body).toHavePropety('preco', 20.00);
    expect(response.type).toMatch(/json/);
});

test("Deve retornar 404 no GET com um conteúdo JSON", async function(){

    const response = await request.get("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.body).toHavePropety({msg: "Produto não encontrado"});
    expect(response.type).toMatch(/json/);
});

test("Deve retornar status 422 no POST/produtos com um JSON", async function(){

    const response = await request.post("/produtos");
    expect(response.status).toBe(422);
    expect(response.body).toHavePropety({msg: "Nome e Preço são obrigatórios"});
    expect(response.type).toMatch(/json/);
});

test("Deve Deve retornar status 200 no PUT/produtos/1 com um JSON", async function(){

    const response = await request.put("/produtos/1").send({nome: "uva verde", preco: 18.00});
    expect(response.status).toBe(200);
    expect(response.body).toHavePropety('id', 1);
    expect(response.body).toHavePropety('nome', "uva verde");
    expect(response.body).toHavePropety('preco', 18.00);
    expect(response.type).toMatch(/json/);
});

// parei na letra k