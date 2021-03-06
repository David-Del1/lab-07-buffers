import { Router } from 'express';
import Order from '../models/Order';
import OrderService from '../services/OrderService';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const order = await OrderService.create(req.body);
      res.send(order);
    } catch(err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const order = await Order.findAll();
      res.send(order);
      
    } catch(err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const order = await Order.findById(req.params.id);
      res.send(order);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const order = await OrderService.update(req.body, req.params.id);
      res.send(order);
    } catch(err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const order = await OrderService.delete(req.params.id);
      res.send(order);

    } catch(err) {
      next(err);
    }
  });
  
