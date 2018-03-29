const Person = require("./person");

class Student extends Person {

    static getArrayFromJson(jsonArray) {
        return jsonArray instanceof Array ? jsonArray.map(json => new Student(json)) : [];
    }

    initDataFromJson(json) {
        super.initDataFromJson(json);

        this.groupe = json["groupe"];
        this.payedContract = json["payed_contract"];
        this.bource = json["bource"];
    }
}

console.log(new Student());

module.exports = Student;