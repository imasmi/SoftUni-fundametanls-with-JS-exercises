function piccolo(input){
    let output = new Set();
    input.forEach(el => {
        let data = el.split(", ");
        if (data[0] == "IN") {
            output.add(data[1]);
        } else if (data[0] == "OUT") {
            output.delete(data[1]);
        }
    });

    if (output.size > 0) {
        output = Array.from(output);
        output.sort((a,b) => a.localeCompare(b));
        output.forEach(el => console.log(el));
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);