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

  it("should get the counter", async function () {
    
    const id = 1;
    const name = "Product 1";
    const emei = "1234567890";
    const color = "Red";
    const size = "Large";
    const price = 100;
    await product.addProduct(id, name, emei, color, size, price);

    const newid = 2;
    const newName = "New Product Name";
    const newEmei = "0987654321";
    const newColor = "Blue";
    const newSize = "Small";
    const newPrice = 50;

    await product.addProduct(newid, newName, newEmei, newColor, newSize, newPrice);
    const result = await product.getProductCount();

    expect(result).to.equal(2);

  });

  it("should retrieve all product IDs", async function () {
    const id1 = 2131;
    const name1 = "Product 1";
    const emei1 = "1234567890";
    const color1 = "Red";
    const size1 = "Large";
    const price1 = 100;
  
    const id2 = 12322;
    const name2 = "Product 2";
    const emei2 = "0987654321";
    const color2 = "Blue";
    const size2 = "Medium";
    const price2 = 50;
  
    await product.addProduct(id1, name1, emei1, color1, size1, price1);
    await product.addProduct(id2, name2, emei2, color2, size2, price2);
  
    const productIDs = await product.getProductIds();
    expect(productIDs.length).to.equal(2);
    expect(productIDs[0]).to.equal(id1);
    expect(productIDs[1]).to.equal(id2);
  });

it("should get authentication counter", async function () {
  const id1 = 2131;
  const name1 = "Product 1";
  const emei1 = "1234567890";
  const color1 = "Red";
  const size1 = "Large";
  const price1 = 100;

  const id2 = 12322;
  const name2 = "Product 2";
  const emei2 = "0987654321";
  const color2 = "Blue";
  const size2 = "Medium";
  const price2 = 50;

  await product.addProduct(id1, name1, emei1, color1, size1, price1);
  await product.addProduct(id2, name2, emei2, color2, size2, price2);
 await product.authenticateProduct(id1);
 await product.authenticateProduct(id2);
 const result = await product.getAuthenticationCounter();

 expect(result).to.equal(2);

});

});
