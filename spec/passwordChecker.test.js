import { PasswordChecker } from "../src/passwordChecker.js";

describe("PasswordChecker class should implement a password checker function", function() {

    describe("PasswordChecker function at least 8 char ", function() {
        it("given a password 12345678", function() {
            expect(PasswordChecker.containsAtLeast8chars("12345678")).toBe(true);
        });

        it("given a password with 1 chararacter", function() {
            expect(PasswordChecker.containsAtLeast8chars("1")).toBe(false);
        });

        it("given a password with 0 chararacter", function() {
            expect(PasswordChecker.containsAtLeast8chars("")).toBe(false);
        });

        it("given a password with 7 chararacter", function() {
            expect(PasswordChecker.containsAtLeast8chars("1234567")).toBe(false);
        });
        
    });

    describe("PasswordChecker function at least 1 special char ", function() {
        it("given a password 12345678", function() {
            expect(PasswordChecker.containsAtLeast1specialChar("12345678")).toBe(false);
        });

        it("given a special character password", function() {
            expect(PasswordChecker.containsAtLeast1specialChar("!")).toBe(true);
        });
        
        it("given two special character password", function() {
            expect(PasswordChecker.containsAtLeast1specialChar("!!")).toBe(true);
        });

        it("given a other special character password", function() {
            expect(PasswordChecker.containsAtLeast1specialChar("12345678@")).toBe(true);
        });

    });

    describe("PasswordChecker function at least 1 number ", function() {
        it("given a password abcdefgh", function() {
            expect(PasswordChecker.containsAtLeast1number("abcdefgh")).toBe(false);
        });

        it("given a password with number", function() {
            expect(PasswordChecker.containsAtLeast1number("1")).toBe(true);
        });
        
    });

});


