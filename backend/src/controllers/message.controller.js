import { VERIFY_TOKEN } from "../config/env.js";
import logger from "../logger/index.js"
export const verifyWhatsAppWebHook = async(req, res) => {
const verifyToken = VERIFY_TOKEN;

  const {
      "hub.mode": mode,
      "hub.challenge": challenge,
      "hub.verify_token": token,
    } = req.query;

    if (mode === "subscribe" && token === verifyToken) {
      logger.info("WEBHOOK VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.status(403).end();
    }
}

export const handleWhatsAppWebhook = async(req, res) => {
  logger.info("Incoming message received");
  logger.info(req.body);

  res.status(200).end();
}