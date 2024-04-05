import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, nex: NextFunction) => {
    console.log('Somethind went wrong', err);

    res.status(400).send({
        message: err.message
    })
};