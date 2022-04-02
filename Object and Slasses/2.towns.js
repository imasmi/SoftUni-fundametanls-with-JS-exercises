function towns(input){
    let output = [];
    input.forEach( el => {
        let data = el.split(" | ");
        output.push({town: data[0], latitude: Number(data[1]).toFixed(2), longitude: Number(data[2]).toFixed(2)});
    });
    output.forEach( el => { console.log(el);});
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);