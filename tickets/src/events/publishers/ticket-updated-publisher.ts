import { Publisher, Subjects, TicketUpdatedEvent } from '@zsbtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

