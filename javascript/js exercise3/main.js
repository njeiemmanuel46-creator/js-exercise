function multiply(a, b) {
    let result = 0;

    for (let i = 0; i < b; i++) {
        result = result + a;
    }

    return result;
}

function multiplyNumbers() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    let result = multiply(a, b);

    document.getElementById("result").innerText = result;
}