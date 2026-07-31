"use strict";
class Student {
    id;
    name;
    marks;
    constructor(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    display() {
        console.log(this.id, this.name, this.marks);
    }
}
let s = new Student(1, "John", 90);
s.display();
