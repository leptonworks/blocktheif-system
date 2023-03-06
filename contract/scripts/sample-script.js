const { ethers } = require("hardhat");

async function main() {
  const Product = await ethers.getContractFactory("Product");
  const product = await Product.deploy();

  await product.deployed();

  console.log("Product contract deployed to:", product.address);

  // Add a product
  await product.addProduct(1, "Product 1", 100);
  console.log("Added product 1");

  // Get the product
  const [name, price] = await product.getProduct(1);
  console.log(`Product 1 - Name: ${name}, Price: ${price}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
