function storeProvisison(stock, delivery){
    let output = {};
    
    stock.forEach((el, index) => {
        if (index % 2 === 0) {
            output[el] = stock[index + 1];
        }
    });

    delivery.forEach((el, index) => {
        if (index % 2 === 0) {
            if (stock.indexOf(el) !== -1) {
                output[el] = Number(output[el]) + Number(delivery[index + 1]);
            } else {
                output[el] = delivery[index + 1];
            }
        }
    });

    for (const key in output) {
        console.log(`${key} -> ${output[key]}`);
    }
}

storeProvisison([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]    
    );