import epxress, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
  NotAuthorisedError
} from '@zsbtickets/common';
import { Ticket } from '../models/ticket';
import { natsWrapper } from '../nats-wrapper';
import { TicketUpdatedPublisher } from '../events/publishers/ticket-updated-publisher';

const router = epxress.Router();

router.put('/api/tickets/:id', 
  requireAuth,
  [
    body('title')
      .not() 
      .isEmpty()
      .withMessage('Title is required'),
    body('price')
      .isFloat({ gt: 0 })
      .withMessage('Price must be provided and must be greater than 0')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      throw new NotFoundError();
    }

    if (ticket.userId !== req.currentUser!.id) {
      throw new NotAuthorisedError();
    }

    ticket.set({
      title: req.body.title,
      price: req.body.price
    });

    await ticket.save();
    await new TicketUpdatedPublisher(natsWrapper.client).publish({
      id: ticket.id,
      title: ticket.title,
      price: ticket.price,
      userId: ticket.userId
    });

    res.send(ticket);
  }
)

export { router as updateTicketRouter };