var FundMe = artifacts.require("FundMe");
var PriceConverter = artifacts.require("PriceConverter");

module.exports = function(deployer) {
  deployer.deploy(FundMe, "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43");
  deployer.deploy(PriceConverter);
};