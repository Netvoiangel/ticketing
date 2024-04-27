import { Publisher, Subjects, TicketUpdatedEvent } from '@wtickets/com';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

