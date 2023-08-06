const apiData = require("../controller/api");
const accessoriesData = require("../controller/Api/AccessoriesApi");
const mobileData = require("../controller/Api/MobileApi");
const ipadData = require("../controller/Api/IpadApi");
const laptopData = require("../controller/Api/LaptopApi");
const macbookData = require("../controller/Api/MacbookApi");

const apiroute = require("express").Router();

apiroute.get("/data", apiData);
apiroute.get("/accessories", accessoriesData);
apiroute.get("/mobile", mobileData);
apiroute.get("/ipad", ipadData);
apiroute.get("/laptop", laptopData);
apiroute.get("/macbook", macbookData);

module.exports = apiroute;
