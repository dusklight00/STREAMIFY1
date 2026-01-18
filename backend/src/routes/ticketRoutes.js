import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  createTicket,
  assignTicket,
  getAssignedTickets,
  resolveTicket,
  getAllTickets,
  filterTickets,
  deleteTicket
} from "../controller/ticketController.js";

const router = express.Router();

router.post("/", auth, createTicket);
router.post("/assign", auth, assignTicket);
router.get("/assigned", auth, getAssignedTickets);
router.put("/:id/resolve", auth, resolveTicket);
router.get("/", auth, getAllTickets);
router.get("/search", auth, filterTickets);
router.delete("/:id", auth, deleteTicket);

export default router;
