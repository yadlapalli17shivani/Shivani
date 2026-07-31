"use strict";
class Employee {
    name;
    salary;
    password;
    constructor(name, salary, password) {
        this.name = name;
        this.salary = salary;
        this.password = password;
    }
    display() {
        console.log(this.name, this.salary);
    }
}
let emp = new Employee("Alice", 50000, "1234");
emp.display();
