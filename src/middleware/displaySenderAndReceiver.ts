import { Request, Response, NextFunction } from "express";
export const displaySenderAndReceiver = async (req: Request, res: Response, next: NextFunction) => {
    const sender = req.headers.x_sender;
    const receiver = req.headers.x_receiver;
    console.log(sender)
    console.log(receiver)


    next();

};  