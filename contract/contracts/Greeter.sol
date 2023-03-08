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

    event ProductAdded(uint256 id, string name, string emei, string color, string size, uint256 price);

    function addProduct(uint256 id, string memory name,string memory emei,string memory color,string memory size, uint256 price) public {
        require(products[id].price == 0, "Product with the same ID already exists");
        products[id] = ProductData(name, emei, color, size, price);
        emit ProductAdded(id, name, emei, color, size, price);
    }

    function getProduct(uint256 id) public view returns (string memory, string memory, string memory, string memory, uint256) {
        require(products[id].price != 0, "Product with the given ID does not exist");
        return (products[id].name,  products[id].emei, products[id].color, products[id].size, products[id].price);
    }
    
    function removeProduct(uint256 id) public {
        require(products[id].price != 0, "Product with the given ID does not exist");
        delete products[id];
    }
    
    function updateProduct(uint256 id, string memory name, string memory emei, string memory color, string memory size, uint256 price) public {
        require(products[id].price != 0, "Product with the given ID does not exist");
        products[id] = ProductData(name, emei, color, size, price);
        emit ProductAdded(id, name, emei, color, size, price);
    }

    // function getCountProducts() public view returns (uint256) {
    // uint256 count = 0;
    // for (uint256 i = 0; i < 2**256 - 1; i++) {
    //     if (products[i].price != 0) {
    //         count++;
    //     }
    // }
    // return count;
    // }
    
    receive() external payable {} // to support receiving ETH by default

    fallback() external payable {
                revert("Invalid transaction");

    }
}
