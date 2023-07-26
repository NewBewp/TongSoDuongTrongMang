function calculate() {
    var input = document.getElementById("inputArray").value;
    var arr = input.split(",");
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) > 0) {
            sum += parseInt(arr[i]);
        }
    }

    document.getElementById("result").innerHTML = "Tổng các số dương trong mảng là: " + sum;
}
