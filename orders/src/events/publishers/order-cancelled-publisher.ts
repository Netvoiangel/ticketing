import { Subjects, OrderCancelledEvent, Publisher } from "@wtickets/com";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}