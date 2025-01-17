export class PasswordChecker {
    static containsAtLeast8chars(password) {
        if(password.length < 8){
            return false;
        }
        return true;
        
    }

    static containsAtLeast1specialChar(password) {
        if (password.match(/!/)){ 
            return true;
        }
        if (password.match(/!!/)){ 
            return true;
        }
        if (password.match(/@/)){ 
            return true;
        }
        return false;
    }
}