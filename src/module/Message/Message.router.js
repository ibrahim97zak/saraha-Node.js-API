import { Router } from "express";
import * as MessageController from './controller/Message.controller.js'
import { auth } from "../../MiddleWare/auth.middleware.js";
const router = Router();
router.get('/',auth,MessageController.getMessage)
router.post('/:receiverId',MessageController.sendMessage)
router.delete('/:messageId',auth,MessageController.deleteMessage)
export default router;