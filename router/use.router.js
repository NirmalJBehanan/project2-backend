import express from "express"
import { addUser, deleteUser, getUser, getUserById, updateUser } from "../controllers/use.controllers.js";
const router=express.Router();
router.get("/",getUser)
router.get("/:id",getUserById)
router.post("/",addUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)
export default router