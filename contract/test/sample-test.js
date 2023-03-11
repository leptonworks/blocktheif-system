const { expect } = require("chai");

describe("Product", function () {
  let product;

  beforeEach(async function () {
    const Product = await ethers.getContractFactory("Product");
    product = await Product.deploy();
    await product.deployed();
  });

  it("should add a product and retrieve its details", async function () {
    const id = 1;
    const name = "Product 1";
    const emei = "1234567890";
    const color = "Red";
    const size = "Large";
    const price = 100;

    await product.addProduct(id, name, emei, color, size, price);
    const result = await product.getProduct(id);

    expect(result[0]).to.equal(name);
    expect(result[1]).to.equal(emei);
    expect(result[2]).to.equal(color);
    expect(result[3]).to.equal(size);
    expect(result[4]).to.equal(price);
  });

  it("should not allow adding a product with an existing ID", async function () {
    const id = 1;
    const name = "Product 1";
    const emei = "1234567890";
    const color = "Red";
    const size = "Large";
    const price = 100;

    await product.addProduct(id, name, emei, color, size, price);

    await expect(product.addProduct(id, "Product 2", "0987654321", "Blue", "Small", 50))
      .to.be.revertedWith("Product with the same ID already exists");
  });

  it("should not allow getting a non-existent product", async function () {
    const id = 1;

    await expect(product.getProduct(id))
      .to.be.revertedWith("Product with the given ID does not exist");
  });

  it("should remove a product", async function () {
    const id = 1;
    const name = "Product 1";
    const emei = "1234567890";
    const color = "Red";
    const size = "Large";
    const price = 100;

    await product.addProduct(id, name, emei, color, size, price);
    await product.removeProduct(id);

    await expect(product.getProduct(id))
      .to.be.revertedWith("Product with the given ID does not exist");
  });

  it("should update an existing product", async function () {
    const id = 1;
    const name = "Product 1";
    const emei = "1234567890";
    const color = "Red";
    const size = "Large";
    const price = 100;
    await product.addProduct(id, name, emei, color, size, price);

    const newName = "New Product Name";
    const newEmei = "0987654321";
    const newColor = "Blue";
    const newSize = "Small";
    const newPrice = 50;

    await product.updateProduct(id, newName, newEmei, newColor, newSize, newPrice);
    const result = await product.getProduct(id);

    expect(result[0]).to.equal(newName);
    expect(result[1]).to.equal(newEmei);
    expect(result[2]).to.equal(newColor);
    expect(result[3]).to.equal(newSize);
    expect(result[4]).to.equal(newPrice);
  });
  
});
