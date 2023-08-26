import { Request, Response } from "express";
import {  convertNumberToString, convertStringToNumber } from "../interceptor/convertMessage";
export const createMessage = async (req: Request, res: Response) => {
    try {
        const sender = req.headers.x_sender;
        let requestBody = req.body;
        let response = {};

        if (sender == "earth") {
            let m = convertStringToNumber(requestBody.message);
            response = {
                "Response From Earth": requestBody.message,
                "Nokia Translation": m

            }
            res.status(200).json(response);


        } else {
            let m = convertNumberToString(requestBody.message);
            response = {
                "Response From Mars": requestBody.message,
                "Nokia Translation": m

            }
            res.status(200).json(response);

        }


    } catch (error) {
        res.status(500).json(error)
    }
}


