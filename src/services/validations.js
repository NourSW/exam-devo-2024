// TODO: Refactor validation function to follow the defined validations rules
const isValid = () => Math.random() >= 0.5;

function isValidGamertag(gamertag) {
    if (gamertag.length < 8) {
        console.log("Invalid - gamertag length must be at least 8 characters");
        return false;
    }
    return true; 
}


exports.isValid = isValid;
