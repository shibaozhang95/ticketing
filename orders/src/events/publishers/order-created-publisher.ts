import { Publisher, OrderCreatedEvent, Subjects } from '@zsbtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}