import express from "express";
import { EarthMarsHandler } from "./handler";
import { displaySenderAndReceiver } from "./middleware/displaySenderAndReceiver";
const bodyParser = require('body-parser');
const routes = express();

routes.use(displaySenderAndReceiver);
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));
routes.get('/test', (req: any, res: any) => {
    res.json({ message: "Server test route" })
})
routes.post('/api/earth-mars-comm/message', (req: any, res: any) => {
    EarthMarsHandler.createMessage(req, res);
})

export default routes;