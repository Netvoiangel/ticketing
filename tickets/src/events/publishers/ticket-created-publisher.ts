import { Publisher, Subjects, TicketCreatedEvent } from '@wtickets/com';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

