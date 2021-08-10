
/*
Validate a password with the following format:
Password at least 6 digits.
At least one lowercase
At least one uppercase
At least one special character from @ # $ % ^ & *
*/
function validatePassword(password){
    let pattern = /(?=(.*[\d]){6,})(?=.*?[a-z]){1,}(?=(.*[A-Z]){1,})(?=(.*[@#$%^&*])){1,}/
    let valid = password.match(pattern);
    return valid;
}

let password1 = 'W*834aAd23$2';
let password2 = '12345a';
let password3 = '##678892S';
let password4 = '678892Sa)';
let password5 = '#1l23kM3456P';

console.log(`Password: ${password1} is ${validatePassword(password1) ? 'valid' : 'invalid'}`)
console.log(`Password: ${password2} is ${validatePassword(password2) ? 'valid' : 'invalid'}`)
console.log(`Password: ${password3} is ${validatePassword(password3) ? 'valid' : 'invalid'}`)
console.log(`Password: ${password4} is ${validatePassword(password4) ? 'valid' : 'invalid'}`)
console.log(`Password: ${password5} is ${validatePassword(password5) ? 'valid' : 'invalid'}`)
