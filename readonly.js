"use strict";
class StudentInfo {
    studentId;
    constructor(id) {
        this.studentId = id;
    }
}
let st = new StudentInfo(101);
console.log(st.studentId);
