const { ethers } = require("hardhat");

async function main() {
  const Product = await ethers.getContractFactory("Product");
  const product = await Product.deploy();

  await product.deployed();

  console.log("Product contract deployed to:", product.address);

  // Add a product
  await product.addProduct(1, "Product 1","Qx123x-47","Black","128", 100);
  console.log("Added product 1");

  // Get the product
  const [name, emei, color, size, price] = await product.getProduct(1);
  console.log(`Product 1 - Name: ${name}, Emei : ${emei}, Color : ${color}, Size : ${size}, Price: ${price}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
