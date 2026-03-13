function uniqueValues(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {

        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }

    }

    return unique;
}

function showUnique() {
    let numbers = [1,2,2,3,4,4,5];

    let result = uniqueValues(numbers);

    document.getElementById("result").innerText = result;
}