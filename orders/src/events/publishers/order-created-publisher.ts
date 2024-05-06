import { Publisher, OrderCreatedEvent, Subjects } from "@wtickets/com";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

