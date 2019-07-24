"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Index {
    constructor() {
        //This function is tested and part of it is uncovered 
        this.uncovered_if = (a = true) => {
            if (a == true) {
                return false;
            }
            else {
                return true;
            }
        };
        //This function will be fully covered
        this.fully_covered = () => {
            return true;
        };
        //This function will not be tested by unit tests
        this.uncovered = () => {
            return true;
        };
    }
}
exports.default = Index;
//# sourceMappingURL=index.js.map