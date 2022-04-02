function employees(names){
    let data = {};
    names.forEach(el => data[el] = el.length);
    Object.entries(data).forEach(item => console.log(`Name: ${item[0]} -- Personal Number: ${item[1]}`));
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );