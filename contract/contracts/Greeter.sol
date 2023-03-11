// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Product {
    struct ProductData {
        string name;
        string emei;
        string color;
        string size;
        uint256 price;
    }

    mapping(uint256 => ProductData) private products;
    uint256 private productCount = 0;

    event ProductAdded(uint256 id, string name, string emei, string color, string size, uint256 price);
    event ProductRemoved(uint256 id);

    function addProduct(uint256 id, string memory name,string memory emei,string memory color,string memory size, uint256 price) public {
        require(products[id].price == 0, "Product with the same ID already exists");
        products[id] = ProductData(name, emei, color, size, price);
        productCount++;
        emit ProductAdded(id, name, emei, color, size, price);
    }

    function getProduct(uint256 id) public view returns (string memory, string memory, string memory, string memory, uint256) {
        require(products[id].price != 0, "Product with the given ID does not exist");
        return (products[id].name,  products[id].emei, products[id].color, products[id].size, products[id].price);
    }
    
    function removeProduct(uint256 id) public {
        require(products[id].price != 0, "Product with the given ID does not exist");
        delete products[id];
        productCount--;
        emit ProductRemoved(id);
    }
    
    function updateProduct(uint256 id, string memory name, string memory emei, string memory color, string memory size, uint256 price) public {
        require(products[id].price != 0, "Product with the given ID does not exist");
        products[id] = ProductData(name, emei, color, size, price);
        emit ProductAdded(id, name, emei, color, size, price);
    }
    
    receive() external payable {} // to support receiving ETH by default

    fallback() external payable {
                revert("Invalid transaction");

    }

    function getProductCount() public view returns (uint256) {
        return productCount;
    }
}
