function softUniBarInocme(input){
    let total = 0;
    let i = 0;
    while(input[i] != 'end of shift'){
        let regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<quantity>[\d]+)\|[^|$%.0-9]*(?<price>[\d]+[.]?[\d]+)\$/gm;
        let data = regex.exec(input[i]);
        if (data !== null) {
            let amount = Number(data.groups.quantity) * Number(data.groups.price);
            console.log(`${data.groups.customer}: ${data.groups.product} - ${amount.toFixed(2)}`);
            total += amount;
        }
        i++;
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

softUniBarInocme(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);
