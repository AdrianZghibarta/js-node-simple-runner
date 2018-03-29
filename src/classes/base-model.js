class BaseModel {

    constructor(json) {
        this.initDataFromJson(json ? json : {});
    }

    initDataFromJson(json) {
        
    }
}

module.exports = BaseModel;