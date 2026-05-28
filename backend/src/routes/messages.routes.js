import { Router } from "express";
import { handleWhatsAppWebhook, verifyWhatsAppWebHook } from "../controllers/message.controller.js";

const router = Router()

router.route("/").get(verifyWhatsAppWebHook).post(handleWhatsAppWebhook)

export default router