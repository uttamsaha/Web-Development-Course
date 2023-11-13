const errorHandler = require("./singleExport.js");
const {fyn1, fyn2} = require("./multipleExports.js");

errorHandler();

fyn1();
fyn2();