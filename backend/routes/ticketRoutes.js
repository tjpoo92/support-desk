const express = require("express");
const router = express.Router();
const {
	getTickets,
	createTickets,
	getTicket,
	deleteTicket,
	updateTicket,
} = require("../controllers/ticketController");

const { protect } = require("../middleware/authMiddleware");

const noteRouter = require("./noteRoutes");
router.use("/:ticketId/notes", noteRouter);

router.route("/").get(protect, getTickets).post(protect, createTickets);

router
	.route("/:id")
	.get(protect, getTicket)
	.put(protect, updateTicket)
	.delete(protect, deleteTicket);

module.exports = router;
