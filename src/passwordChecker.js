export class PasswordChecker {
    static containsAtLeast8chars(password) {
        if(password.length < 8){
            return false;
        }
        return true;
        
    }

    static containsAtLeast1specialChar(password) {
        const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if(specialCharRegex.test(password)){
            return true;
        }

        return false;
    }

    static containsAtLeast1number(password) {
        if(password.match(/[0-9]/)){
            return true;
        }

        return false;
    }

    static nocontainTheCharIPL(password) {
        if(password.toLowerCase().includes('ipl')){
            return false;
        }

        return true;
    }

    static isValid(password){
        return this.containsAtLeast8chars(password) && this.containsAtLeast1specialChar(password) && this.containsAtLeast1number(password) && this.nocontainTheCharIPL(password);
    }
}