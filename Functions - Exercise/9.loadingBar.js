function loadingBar(percents){
    let bar = (percents) => {
        let devided = percents/10;
        let bar = "";
        for (let i = 0; i < 10; i++) {
            bar += i < devided ? "%" : ".";
        }
        return `[${bar}]`;
    }

    if (percents < 100) {
        console.log(`${percents}% ${bar(percents)}`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
    }
}

loadingBar(0);