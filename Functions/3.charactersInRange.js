function charactersInRange(a, b) {
    let start;
    let end;
    if (a > b) {
        start = b;
        end = a;
    } else {
        start = a;
        end = b;
    }
    
    function chars(start, end){
        let result = [];
        for (let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++) {
            result.push(String.fromCharCode(i));
        }
        return result;
    }
    console.log(chars(start, end).join(" "));
}

charactersInRange('C',
'#'
);