const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");

const provider = waffle.provider;

describe("Product", function () {
  it("Should add and retrieve a product", async function () {
    const Product = await ethers.getContractFactory("Product");
    const product = await Product.deploy();
    await product.deployed();

    await product.addProduct(1, "iPhone", 1000);

    const [name, price] = await product.getProduct(1);

    expect(name).to.equal("iPhone");
    expect(price).to.equal(1000);
  });
});
