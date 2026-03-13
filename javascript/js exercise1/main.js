function findMax(a, b, c) {
    let max = a;

    if (b > max) {
        max = b;
    }

    if (c > max) {
        max = c;
    }

    return max;
}

function showMax() {
    let result = findMax(5, 8, 3);
    document.getElementById("result").innerText = "Max: " + result;
}