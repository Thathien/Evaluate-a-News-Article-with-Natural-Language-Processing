
import { emailChecker } from "../emailChecker";

describe("Testing the checkName functionality", () => {
    test("Testing the checkForName() function", () => {
        global.alert = jest.fn();
        expect(emailChecker("abc123@gmail.com")).toEqual(false);
    });
});
