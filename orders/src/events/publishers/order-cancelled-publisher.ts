import { Publisher, OrderCancelled, Subjects } from '@zsbtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelled> {
  readonly subject = Subjects.OrderCancelled;
}