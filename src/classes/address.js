var BaseModel = require("./base-model");

class Address extends BaseModel {

    initDataFromJson(json) {
        this.country = json["country"];
        this.city = json["city"];
        this.street = json["street"];
    }
}

module.exports = Address;