function cutAndReverse(input){
    let reverse = input => input.split("").reverse().join("");

    let half1 = input.slice(0, input.length / 2);
    let half2 = input.slice(input.length / 2);

    console.log(reverse(half1));
    console.log(reverse(half2));
}

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');