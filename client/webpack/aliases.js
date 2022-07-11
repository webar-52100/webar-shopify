const path = require("path");
const rootPath = require("./rootPath").root;

module.exports = {
  "@": path.resolve(rootPath, "src"),
  "@App": path.resolve(rootPath, "app"),
};
