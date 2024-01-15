// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBeDefined();
    });
    test('should return false if gamertag length is less than 8 characters', () => {
        const result = isValidGamertag('1234567');
        expect(result).toBe(false);
    });
});
