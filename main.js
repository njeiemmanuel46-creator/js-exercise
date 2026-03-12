function isLeapYear(year) {

    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }

    if (year % 400 === 0) {
        return true;
    }

    return false;
}

function checkLeapYear() {
    let year = document.getElementById("year").value;

    if (isLeapYear(year)) {
        document.getElementById("result").innerText = "Leap Year";
    } else {
        document.getElementById("result").innerText = "Not Leap Year";
    }
}