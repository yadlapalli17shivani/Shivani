// functions-demo.ts
// 2. Default Parameters
function getCollege(college = "SVECW") {
    return `College: ${college}`;
}
// 3. Optional Parameters
function sendEmail(emailId, subject) {
    console.log(`Sending Email to ${emailId}...`);
    if (subject) {
        console.log(`Subject: ${subject}`);
    }
}
// 4. REST Parameters
function calculateMarks(...marks) {
    return marks.reduce((total, current) => total + current, 0);
}
// ----- Testing -----
console.log(welcome("Shivani"));
// console.log(welcome(100)); // Error
console.log(getCollege()); // Default (SVECW)
console.log(getCollege("JNTU")); // Overridden
sendEmail("student@gmail.com"); // Optional omitted
sendEmail("student@gmail.com", "Project Submission"); // Optional provided
const total = calculateMarks(85, 90, 78, 92);
console.log(`Total Marks: ${total}`);
export {};
