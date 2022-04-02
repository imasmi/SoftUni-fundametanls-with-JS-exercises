function oddOccurrences(input){
    let map = new Map();
    input.split(" ").forEach(el => {
        let key = el.toLowerCase();
        if (map.has(key)) {
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    }); 

    let output = [];
    for (const [key,value] of map){
        if (value % 2 !== 0) {
            output.push(key);
        }
    }
    console.log(output.join(" "));
}

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');