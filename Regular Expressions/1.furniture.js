function furniture(input){
    let total = 0;
    console.log("Bought furniture:");
    input.forEach(el => {
        let reg = />>(.+)<<(\d+\.\d+|\d+)\!(\d+)/i;
        let regex = reg.exec(el);
        if (regex !== null){
            console.log(regex[1]);
            total += Number(regex[2]) * Number(regex[3]);
        }
    });
    console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);