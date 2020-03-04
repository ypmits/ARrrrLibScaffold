var Generator = require('yeoman-generator');
module.exports = class extends Generator{
    doThis() {
        this.log("Doing this for you");
    }

    doThat() {
        this.log("Doing that for you too");
    }
};