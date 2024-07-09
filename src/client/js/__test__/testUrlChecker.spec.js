
import { checkForURL } from "../checkForURL"

describe("Testing the submit functionality", () => {
    test("Testing the checkForURL() function", () => {
        global.alert = jest.fn();
        expect(checkForURL).toBeDefined();
})});