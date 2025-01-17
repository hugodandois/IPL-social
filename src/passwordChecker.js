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
        if(password.match(/[IPL]/)){
            return false;
        }
        if(password.match(/[ipl]/)){
            return false;
        }
        return true;
    }
}