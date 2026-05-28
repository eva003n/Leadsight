import { server } from "./app.js";
import { PORT, BASE_URL } from "./config/env.js";
import logger from "./logger/index.js";
const port = PORT || 3000;

server.listen(port, () => {
  logger.info(`Leadsight server running on ${BASE_URL}`);
});