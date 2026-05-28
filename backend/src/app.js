import {createServer} from "http"
import { VERIFY_TOKEN } from "./config/env.js";

// Import Express.js
import express from "express";

// Create an Express app
const app = express();

app.set("trust-proxy", 1)
// Middleware to parse JSON bodies
app.use(express.json());



import messageRouter from "./routes/messages.routes.js"
// whatsapp messages endpoint
app.use("/api/v1/messages", messageRouter)

// create new server from express instance
export const server = createServer(app)