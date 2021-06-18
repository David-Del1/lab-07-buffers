import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Order from '../lib/models/Order.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('creates a new order in our databse and sends a text message', async () => {
    const res = await request(app)
      .post('/api/v1/orders')
      .send({ quantity: 10 });

    expect(res.body).toEqual({ id: '1', quantity: 10 });
  });

  it.skip('Selects an order by id via GET', async () => {
    const order = await Order.insert({ quantity: 5 });
    return request(app)
      .get(`/api/v1/orders/${order.id}`)
      .then(res => {
        expect(res.body).toEqual(order);
      });
  });

  it.skip('Selects all orders via GET', async () => {
    const order1 = await Order.insert({
      quantity: 10
    });
    const order2 = await Order.insert({
      quantity: 15
    });
    const order3 = await Order.insert({
      quantity: 20
    });

    const res = await request(app).get('/api/v1/orders');
  
    expect(res.body).toEqual([order1, order2, order3]);
  });

  it.skip('Updates an order via PUT', async () => {
    const order = await Order.insert({
      quantity: 10
    });

    order.quantity = 5;

    const res = await request(app).put(`/api/v1/orders/${order.id}`)
      .send(order);
    expect(res.body).toEqual(order);
  });

  it('Deletes an order by id via DELETE', async () => {
    const order = await Order.insert({
      quantity: 10
    });

    const res = await request(app).delete(`/api/v1/orders/${order.id}`);
  
    expect(res.body).toEqual(order);
  });
});
