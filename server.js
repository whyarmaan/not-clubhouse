// Import statements
const { app } = require("./app");
const http = require("http");
const { __listening_port } = require("./config/constants");
const { print } = require("./Functions/logging");
const server = http.createServer(app);

// Listening
server.listen(__listening_port, () => {
    print(`[SERVER] Listening On Port ${__listening_port}`.green);
});