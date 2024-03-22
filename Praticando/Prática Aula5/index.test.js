
const supertest = require('supertest');

const app = require('./index');

const request = supertest (app);

test ("No get deve retornar o status 200 e um conteúdo do tipo JSON", async function(){
    
    const response = await request.get('/produtos');
    expect(response.status).toBe(200);
    expect(response.headers['content-type'].toMatch(/json/));
});

test ("No get deve retornar o status 200 e um conteúdo do tipo JSON", async function(){
    
    const response = await request.get('/produtos/1');
    expect(response.status).toBe(200);
    expect(response.headers['content-type'].toMatch(/json/));
});

test ("No get deve retornar o status 404 e um conteúdo do tipo JSON", async function(){
    
    const response = await request.get('/produtos/100');
    expect(response.status).toBe(200);
    expect(response.headers['content-type'].toMatch(/json/));
});

test ("No post deve retornar o status 201 com um conteúdo JSON", async function(){
    const response = await request.post('/produtos').send({nome: "uva", preco:20.00});
    expect(response.status).toBe(201);
    expect(response.headers['content-type'].toMatch(/json/));

});

test ("No post deve retornar o status 200 com um conteúdo JSON", async function(){
    const response = await request.post('/produtos1');
    expect(response.status).toBe(200);
    expect(response.headers['content-type'].toMatch(/json/));

});

test ("No put deve retornar 200 e um conteúdo JSON", async function(){
    const response = (await request.put('produtos1')).send({nome: "uva verde", preco: 18.00});     //PAREI NA ÇETRA "K" E A PRÓXIMA É A "L"
    expect(response.status).toBe(200);
    expect(response.headers['content-type'].toMatch(/json/));
});

