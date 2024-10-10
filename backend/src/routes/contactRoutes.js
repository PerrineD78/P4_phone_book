import express from "express";
import * as contactControllers from "../controllers/contactController.js";

const router = express.Router();

// POST = Create
router.post("/", contactControllers.createContact)

// GET = Read
router.get("/", contactControllers.readAllContact)

// PUT = Update
router.put("/:id", contactControllers.updateContact)

// DELETE = Delete
router.delete('/:id', contactControllers.deleteContact)

export default router;