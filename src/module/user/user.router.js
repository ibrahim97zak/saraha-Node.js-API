import { Router } from "express";
import * as  userController from './controller/user.controller.js'
import { auth } from "../../MiddleWare/auth.middleware.js";
import { asyncHandler } from "../../services/errorHandler.js";
import fileUpload, { HME } from "../../services/multer.js";
const router = Router();
router.get("/",userController.getUsers)
router.patch('/:id',userController.updateUser)
router.delete('/:id',userController.deleteUser)
router.get('/profile',auth,asyncHandler(userController.profile))
router.put('/profilePic',auth,fileUpload().single('image'),HME,asyncHandler(userController.profilePic))
export default router; 