// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Product {
    struct ProductData {
        string name;
        uint256 price;
    }

    mapping(uint256 => ProductData) private products;

    event ProductAdded(uint256 id, string name, uint256 price);

    function addProduct(uint256 id, string memory name, uint256 price) public {
        products[id] = ProductData(name, price);
        emit ProductAdded(id, name, price);
    }

    function getProduct(uint256 id) public view returns (string memory, uint256) {
        return (products[id].name, products[id].price);
    }
}
