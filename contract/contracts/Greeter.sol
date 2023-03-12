// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Product {
    struct ProductData {
        string name;
        string emei;
        string color;
        string size;
        uint256 price;
        uint256 timestamp;
    }

    mapping(uint256 => ProductData) private products;
    uint256[] private productIds;
    uint256 private productCount = 0;

    event ProductAdded(uint256 id, string name, string emei, string color, string size, uint256 price, uint256 timestamp);
    event ProductRemoved(uint256 id);

    function addProduct(uint256 id, string memory name,string memory emei,string memory color,string memory size, uint256 price) public {
        require(products[id].price == 0, "Product with the same ID already exists");
        uint256 timestamp = block.timestamp;
        products[id] = ProductData(name, emei, color, size, price, timestamp);
        productIds.push(id);
        productCount++;
        emit ProductAdded(id, name, emei, color, size, price, timestamp);
    }

    function getProduct(uint256 id) public view returns (string memory, string memory, string memory, string memory, uint256, uint256) {
        require(products[id].price != 0, "Product with the given ID does not exist");
        return (products[id].name,  products[id].emei, products[id].color, products[id].size, products[id].price, products[id].timestamp);
    }
    
    function removeProduct(uint256 id) public {
        require(products[id].price != 0, "Product with the given ID does not exist");
        delete products[id];
        for (uint i = 0; i < productIds.length; i++) {
            if (productIds[i] == id) {
                productIds[i] = productIds[productIds.length - 1];
                productIds.pop();
                break;
            }
        }
        productCount--;
        emit ProductRemoved(id);
    }
    
    function updateProduct(uint256 id, string memory name, string memory emei, string memory color, string memory size, uint256 price) public {
        require(products[id].price != 0, "Product with the given ID does not exist");
        uint256 timestamp = block.timestamp;
        products[id] = ProductData(name, emei, color, size, price, timestamp);
        emit ProductAdded(id, name, emei, color, size, price, timestamp);
    }
    
    receive() external payable {} // to support receiving ETH by default

    fallback() external payable {
        revert("Invalid transaction");
    }

    function getProductCount() public view returns (uint256) {
        return productCount;
    }

    function getProductIds() public view returns (uint256[] memory) {
        return productIds;
    }
}
