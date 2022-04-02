function companyUsers(input){
    let output = {};
    input.forEach(el => {
        let data = el.split(" -> ");
        let company = data[0];
        let employee_id = data[1];
        let employees;
        if (output.hasOwnProperty(company)) {
            employees = output[company];
        } else {
            employees = new Set();
        }
        employees.add(employee_id);
        output[company] = employees;
        

    });
    let companyNames = Object.keys(output);
    companyNames.sort((a, b) => a.localeCompare(b));
    companyNames.forEach(el => {
        console.log(el);
        output[el].forEach(empl => console.log(`-- ${empl}`));
    });
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    );