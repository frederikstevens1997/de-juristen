pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Creator {
    using Strings for string;
    using Address for address;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint modulusNumber = 23;

    event NewRegistration(uint registrationID, string productUri);

    struct Registration {
        string name;
        string description;
        string productUrl;
        uint256 dateOfCreation; 
        uint256 dateRegistration;
        uint256 creationType;
    }

    Registration[] public registrations;

    mapping (uint => address) public productToOwner;

    function createProduct(string memory _name, string memory _description, string memory _productUri, 
    uint256 _dateOfCreation, uint256 _dateRegistration, uint256 _creationType) public {
        registrations.push(Registration(_name, _description, _productUri, _dateOfCreation, _dateRegistration, _creationType));
        uint registrationId = registrations.length - 1;
        productToOwner[registrationId] = msg.sender;
        emit NewRegistration(registrationId, _productUri);
    }
}