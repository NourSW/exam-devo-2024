// TODO: Refactor validation function to follow the defined validations rules
const isValid = () => Math.random() >= 0.5;

function isValidGamertag(gamertag) {
    if (gamertag.length < 8) {
        console.log("Invalid - gamertag length must be at least 8 characters");
        return false;
    }
    return true; 
}

function isValidGamertag(gamertag) {
    if (gamertag.length < 8) {
        console.log("Invalid - gamertag length must be at least 8 characters");
        return false;
    }

    
    const specialChars = ['&', '$', '!', 'è', '§', 'à', '_'];
    const hasSpecialChar = specialChars.some(char => gamertag.includes(char));
    if (!hasSpecialChar) {
        console.log("Invalid - gamertag must contain at least a special character");
        return false;
    }

    return true; 
}




exports.isValid = isValid;
