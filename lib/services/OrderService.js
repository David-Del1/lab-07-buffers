import { sendSms } from '../utils/twilio.js';
import Order from '../models/Order.js';

export default class OrderService {
  static async create({ quantity }) {
    const order = await Order.insert({ quantity });
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New Order received for ${quantity}`
    );
    return order;
  }

  static async update({ quantity, id }) {
    const order = await Order.update({ quantity, id });

    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Order updated to have quantity: ${quantity}`
    );
    return order;
  }

  static async delete(id) {
    const order = await Order.delete(id);

    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Order ${id} has been successfully deleted!`
    );
    return order;
  }

}
