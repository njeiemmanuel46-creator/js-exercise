function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}

function calculateFactorial() {
    let num = document.getElementById("num").value;
    let answer = factorial(num);

    document.getElementById("result").innerText = answer;
}