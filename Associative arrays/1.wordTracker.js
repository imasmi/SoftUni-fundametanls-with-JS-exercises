function wordTracker(input) {
    let words = input[0].split(" ");
    let output = {};
    words.forEach(el => {
        output[el] = 0;
    });
    input.forEach((el, index) => {
        if (index > 0) {
            if(output.hasOwnProperty(el)) {
                output[el] = ++output[el];
            }
        }
    });
    let entries = Object.entries(output);
    entries.sort((a, b) => b[1] - a[1] );
    entries.forEach(el => console.log(`${el[0]} - ${el[1]}`));
}

wordTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );