
import { checkForName } from "../nameChecker";

describe("Testing the checkName functionality", () => {
    test("Testing the checkForName() function", () => {
        global.alert = jest.fn();
        expect(checkForName("HienTT24@gmail.com")).toEqual(false);
    });
});
