const http = require("http");
const app = require("app");
const PORT = require("./utils/config").PORT;

const server = http.createServer(app);

server.listen(PORT,()=>{
  logger.info(`listening on port ${PORT}`)
})
