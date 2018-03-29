const BaseModel = require("./base-model");
const Address = require("./address");

class Person extends BaseModel {

    initDataFromJson(json) {
        this.firstName = json["firstName"];
        this.lastName = json["lastName"];
        this.birthDateRaw = json["birthDate"];
        this.sex = json["sex"];

        const addressJson = json["address"];
        this.address = addressJson ? new Address(addressJson) : null;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get birthDate() {
        return this.birthDateRaw ? new Date(this.birthDateRaw) : null;
    }
}

module.exports = Person;