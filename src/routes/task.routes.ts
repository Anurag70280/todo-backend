import express from "express";
import { verifyToken} from "../middleware/auth.middleware";
import { addTask, getTasks, updateTask, deleteTask } from "../controllers/task.controller";

const router = express.Router();

router.use(verifyToken);

router.post("/", addTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);



export default router;
