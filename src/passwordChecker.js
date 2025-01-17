export class PasswordChecker {
    static containsAtLeast8chars(password) {
        if(password.length < 8){
            return false;
        }
        return true;
        
    }
}