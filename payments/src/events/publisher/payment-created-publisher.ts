import { Subjects, Publisher, PaymentCreatedEvent } from '@zsbtickets/common';

export class PaymentCreatePublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}