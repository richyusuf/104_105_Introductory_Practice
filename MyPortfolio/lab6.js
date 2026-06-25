let visitorAge = 15;
let visitorHeight = 175;


if(visitorAge < 8){
    console.log("Вход запрещен, мало лет")
} else if (visitorAge <= 18 && visitorHeight <= 140){
    console.log("Вход только с родителями")
} else {
    console.log("Добро пожаловать")
}

let sum = 0;

for (let i = 0; i <= 200; i++){
    if (i % 3 === 0 && i % 5 !== 0){
        sum += i;
    }
}

console.log(sum);

for (let i = 15; i >= 1; i--){
    if(i % 2 === 0){
        console.log(i)
    } else {
        console.log(i * 2);
    }
}

let sum2 = '10000';

for (let year = 1; year <= 10; year++){
    sum2 += sum2 * 0.08;
}

console.log(sum2);

let ladder = "";

for (let i = 1; i <= 6; i++){
    ladder += "#";
    console.log(ladder);
}

for (let i = 1; i <= 50; i++){
    if (i % 4 === 0 && i % 7 === 0){
        console.log("BeepBoop");
    } else if (i % 4 === 0){
        console.log("Boop");
    } else if (i % 7 === 0){
        console.log("Boop");
    } else {
        console.log(i);
    }
}

let n = 27;

for (let step = 0; step <= 16; step++){
    if (n % 2 === 0){
        n /= 2;
    } else {
        n = n * 3 + 1;
    }
    console.log(`Шаг ${step}: n = ${n}`);
}