import { PasswordChecker } from "../src/passwordChecker.js";

describe("PasswordChecker class should implement a password checker function", function() {

    describe("PasswordChecker function at least 8 char ", function() {
        it("given a password 12345678", function() {
            expect(PasswordChecker.containsAtLeast8chars("12345678")).toBe(true);
        });

        it("given a password with 1 chararacter", function() {
            expect(PasswordChecker.containsAtLeast8chars("1")).toBe(false);
        });
        
    });

});


