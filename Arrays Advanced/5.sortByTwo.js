function sortByTwo(input){
    input.sort((a, b) => a.length - b.length);
    input.sort((a, b) => { if (a.length == b.length) { return a.localeCompare(b);}});
    input.forEach( el => console.log(el));
}

sortByTwo(['Asac', 'Theodor', 'Beor', 'Harrison', 'Aack']);