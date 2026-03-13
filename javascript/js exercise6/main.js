function digitSumProduct(num) {

    let sum = 0;
    let product = 1;

    while (num > 0) {

        let digit = num % 10;

        sum = sum + digit;
        product = product * digit;

        num = Math.floor(num / 10);
    }

    return "Sum: " + sum + " Product: " + product;
}

function calculate() {

    let num = document.getElementById("number").value;

    let result = digitSumProduct(num);

    document.getElementById("result").innerText = result;
}