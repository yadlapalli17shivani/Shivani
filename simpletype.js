let Name = "Shivani";
let Age = 20;
let Member = true;
console.log("Data type Name is-->" + typeof Name);
console.log("Data type Age is-->" + typeof Age);
console.log("Data type Member is-->" + typeof Member);
function displayProfile(name, age, active) {
    console.log(`User : ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${active ? "active" : "Inactive"}`);
}
displayProfile(Name, Age, Member);
export {};
