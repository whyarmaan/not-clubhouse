require("colors");
const fs = require("fs/promises");
const { __prod } = require("../config/constants");

exports.print = async (message) => {
    console.log(message);
    if(__prod) {
        const bytes = await fs.readFile("../logs/prod.log");
        var prodFileContent = bytes.toLocaleString();
        prodFileContent += `
        ------------------------
        [${new Date}]: ${message}
        `;
        await fs.writeFile('../logs/prod.log', prodFileContent);
        return null;
    }

    const bytes = await fs.readFile(__dirname + "/../logs/dev.log");
    var devFileContent = bytes.toLocaleString();
    devFileContent += `
------------------------
[${new Date}]: ${message}
`;
    await fs.writeFile(__dirname + '/../logs/dev.log', devFileContent);
    return null;
}
