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
       if(password.match(/1/)){
           return true;
        }

        return false;
    }
}