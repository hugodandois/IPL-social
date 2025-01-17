export class PasswordChecker {
    static containsAtLeast8chars(password) {
        if(password.length == 1){
            return false;
        }
        if(password.length == 0){
            return false;
        }
        return true;
        
    }
}