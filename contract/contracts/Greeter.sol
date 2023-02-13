//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string private greeting;
    string private name;
    string private color;
    uint private storageSize;
    string private EMEI;
    
    constructor(string memory _greeting, string memory _name, string memory _color, uint _storageSize, string memory _EMEI) public {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
        name = _name;
        color = _color;
        storageSize = _storageSize;
        EMEI = _EMEI;
    }

    function greet() public view returns (string memory, string memory, string memory, uint, string memory) {
        return (greeting, name, color, storageSize, EMEI);
    }

    function setGreeting(string memory _greeting, string memory _name, string memory _color, uint _storageSize, string memory _EMEI) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
        name = _name;
        color = _color;
        storageSize = _storageSize;
        EMEI = _EMEI;
    }

    function deposit() public payable {}

}
