const pass = prompt("Please enter your password.");

// //password must be 8 and above character.
// if (pass.length >= 8) {
//     alert("Good password.");
// } else {
//         alert("Bad password.");
//     }

//     //password should not contain spaces
//     if (pass.indexOf(" ") === .1) {
//         console.log("No space");
//     } else {
//         console.log("Password should not have spaces.")
// }

if (pass.length >= 0) {
    //password cannot include space
    if(pass.indexOf(" ") === -1) {
    alert("Valid password.");
} else { 
    alert("Password should not have spaces.");
} 
} else {
    alert("Invalid password.");
}
