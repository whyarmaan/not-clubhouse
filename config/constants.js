require("dotenv").config();

exports.__prod = !!parseInt(process.env.PRODMODE);
exports.__session_keys = {
    keys: process.env.SESSION_KEYS.split(","),
    name: process.env.SESSION_NAME
}
exports.__listening_port = parseInt(process.env.PORT) ? this.__prod : 3000