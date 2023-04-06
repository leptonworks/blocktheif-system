// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Product {
    struct ProductData {    // defining a new struct named ProductData to store product information
        string name;
        string emei;
        string color;
        string size;
        uint256 price;
        uint256 timestamp;

    }

    // a mapping that maps product ID to its corresponding product information
    mapping(uint256 => ProductData) private products;
    // an array to keep track of all product IDs
    uint256[] private productIds;
    // a counter to keep track of the number of products stored
    uint256 private productCount = 0;
    // a counter to keep track of the number of times a product has been authenticated
    uint256 private authenticationCounter = 0;

    // an event to emit when a new product is added
    event ProductAdded(uint256 id, string name, string emei, string color, string size, uint256 price, uint256 timestamp);
    event ProductRemoved(uint256 id); // an event to emit when a product is removed
    event ProductAuthenticated(uint256 id); // an event to emit when a product is authenticated


    function addProduct(uint256 id, string memory name,string memory emei,string memory color,string memory size, uint256 price) public {
        // check if a product with the same ID already exists
        require(products[id].price == 0, "Product with the same ID already exists");
        uint256 timestamp = block.timestamp;    // get the current timestamp
        products[id] = ProductData(name, emei, color, size, price, timestamp);  // store product information in the mapping
        productIds.push(id);    // add product ID to the array of product IDs
        productCount++;     //increment product counter
        emit ProductAdded(id, name, emei, color, size, price, timestamp);   // emit ProductAdded event
    }

    function getProduct(uint256 id) public view returns (string memory, string memory, string memory, string memory, uint256, uint256) {
        require(products[id].price != 0, "Product with the given ID does not exist");   // check if a product with the given ID exists
        return (products[id].name,  products[id].emei, products[id].color, products[id].size, products[id].price, products[id].timestamp);  // return product information
    }
    
    function removeProduct(uint256 id) public {
        require(products[id].price != 0, "Product with the given ID does not exist"); // check if a product with the given ID exists
        delete products[id]; // remove product information from the mapping
        for (uint i = 0; i < productIds.length; i++) { // loop through the array of product IDs
            if (productIds[i] == id) { // if the current product ID matches the given ID
                productIds[i] = productIds[productIds.length - 1]; // move the last product ID to the current position
                productIds.pop(); // remove the last product ID from the array
                break; // break out of the loop
            }
        }
        productCount--; // decrement product counter
        emit ProductRemoved(id); // emit ProductRemoved event
    }


    function updateProduct(uint256 id, string memory name, string memory emei, string memory color, string memory size, uint256 price) public {
        require(products[id].price != 0, "Product with the given ID does not exist"); // check if the product with the given id already exists
        uint256 timestamp = block.timestamp; // get the current block timestamp
        products[id] = ProductData(name, emei, color, size, price, timestamp); // update the product details
        emit ProductAdded(id, name, emei, color, size, price, timestamp);  // emit an event indicating that the product has been updated
    }
    
    receive() external payable {} // to support receiving ETH by default

    fallback() external payable {
        revert("Invalid transaction"); // a fallback function to revert any invalid transactions
    }

    function getProductCount() public view returns (uint256) {
        return productCount; // return the count of the products added to the contract
    }

    function authenticateProduct(uint256 id) public returns (bool) {
        for (uint i = 0; i < productIds.length; i++) {// loop through the product ids to check if the given id exists
            if (productIds[i] == id) {
                authenticationCounter++; // increment the authentication counter
                return true; // return true if the given id exists
            }
        }
        return false; // return false if the given id does not exist
    }


    function getAuthenticationCounter() public view returns (uint256) {
        return authenticationCounter;  // return the count of authenticated products
    }


    function getProductIds() public view returns (uint256[] memory) {
        return productIds; // return an array of all the product ids added to the contract
    }
}
