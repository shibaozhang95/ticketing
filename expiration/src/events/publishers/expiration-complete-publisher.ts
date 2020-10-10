import { ExpirationCompleteEvent, Publisher, Subjects } from '@zsbtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}