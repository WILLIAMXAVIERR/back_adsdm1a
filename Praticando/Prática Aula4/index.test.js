const supertest = require('supertest');

const app = require('./index');
const request = supertest(app);

test('Deve retornar 200 GET /', async function(){

    const response = await request.get ('/');
    expect(response.status).toBe(200);
})

test('Retorne 201 POST/', async function(){
    const yan = await request.post('/');
    expect(yan.status).toBe(201);
})

test('Retorne 200 PUT/', async function(){
    const gabriel = await request.put('/');
    expect(gabriel.status).toBe(200);
})

test('Retorne 201 DELETE/', async function(){
    const matheus = await request.delete('/');
    expect(matheus.status).toBe(204);
})

