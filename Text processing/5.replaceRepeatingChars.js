function replaceRepeatingChars(input){
    let previous = "";
    let output = "";
    for (let el of input){
        if (el != previous) {
            output += el;
            previous = el;
        }
    };
    console.log(output);
}

replaceRepeatingChars('qqqwerqwecccwd');