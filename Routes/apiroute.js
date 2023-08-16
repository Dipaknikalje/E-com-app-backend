const apiData = require("../controller/api");
const accessoriesData = require("../controller/Api/AccessoriesApi");
const mobileData = require("../controller/Api/MobileApi");
const ipadData = require("../controller/Api/IpadApi");
const laptopData = require("../controller/Api/LaptopApi");
const macbookData = require("../controller/Api/MacbookApi");
const BestSeller = require("../controller/Api/BestSeller");

const apiroute = require("express").Router();

apiroute.get("/data", apiData);
apiroute.get("/accessories", accessoriesData);
apiroute.get("/mobile", mobileData);
apiroute.get("/ipad", ipadData);
apiroute.get("/laptop", laptopData);
apiroute.get("/macbook", macbookData);
apiroute.get('/bestseller',BestSeller)

module.exports = apiroute;
