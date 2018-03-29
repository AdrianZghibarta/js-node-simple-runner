const Person = require("./person");

class Teacher extends Person {

    static getArrayFromJson(jsonArray) {
        return jsonArray instanceof Array ? jsonArray.map(json => new Teacher(json)) : [];
    }

    initDataFromJson(json) {
        super.initDataFromJson(json);

        this.salary = json["salary"];
    }
}

module.exports = Teacher;