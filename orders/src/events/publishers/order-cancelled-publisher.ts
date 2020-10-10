import { Publisher, OrderCancelledEvent, Subjects } from '@zsbtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}