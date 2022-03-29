function NxNMatrix(num){
    let row = (items) => {
        let rowOutput = [];
        for (let i = 0; i < items; i++) {
            rowOutput.push(items);
        }
        return rowOutput.join(" ");
    }

    for (let i = 0; i < num; i++) {
        console.log(row(num));
    }
}

NxNMatrix(7);