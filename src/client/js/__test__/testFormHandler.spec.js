
import { handleSubmit } from "../formHandler";

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        global.alert = jest.fn();
        expect(handleSubmit).toBeDefined();
    });
});
