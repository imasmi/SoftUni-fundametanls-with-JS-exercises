function passwordValidator(pass) {
    let splitPass = pass.split("");

    function checkLength(splitPass){
        return splitPass.length >= 6 && splitPass.length <= 10;
    }

    function checkSymbols(pass, splitPass){
        return pass.match(/[A-Za-z0-9]/g) !== null && pass.match(/[A-Za-z0-9]/g).length == splitPass.length;
    }

    function checkDigits(splitPass){
        return pass.match(/[0-9]/g) != null && pass.match(/[0-9]/g).length >= 2;
    }

    let valid = true;
    if (!checkLength(splitPass)) {
        console.log("Password must be between 6 and 10 characters");
        valid = false;
    }

    if (!checkSymbols(pass, splitPass)) {
        console.log("Password must consist only of letters and digits");
        valid = false;
    }

    if (!checkDigits(splitPass)) {
        console.log("Password must have at least 2 digits");
        valid = false;
    }

    if (valid) {console.log("Password is valid");}
}

passwordValidator('Pa$s$s');