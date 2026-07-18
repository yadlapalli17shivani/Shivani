let Phonename = "Google Pixel";
let releaseYear = 2024;
let isworth = true;
// function parameter and return type annotations
//this function strictly takes a string and a number, and must return a string
function getPhoneStatus(Phonename, year) {
    return `${Phonename}is released in ${year}`;
}
// array annotations
let Companyname = ["Google", "Vivo", "Samsung"];
// using the annotations variables and functions
const summary = getPhoneStatus(Phonename, releaseYear);
console.log(summary);
console.log(`Starring: ${Companyname.join(",")}`);
console.log(`Is it worth?${isworth ? "Yes" : "No"}`);
export {};
