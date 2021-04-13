// [1,2,3
//  4,5,6,
// 7,8,9]

//arr[n][m] as input
//n number of rows

function diagonalDifference(arr) {
    var rightDia = 0;
    var leftDia = 0;
    var inputArray = input.split("\n");
    var squareSize = parseInt(inputArray.shift() - 1);
    for (var i = 0; i < inputArray.length; i++) {
        var row = inputArray[i].split(" ");
        rightDia += parseInt(row[i]);
        leftDia += parseInt(row[squareSize]);
        squareSize--;
    }
    console.log(Math.abs(rightDia - leftDia));



}

diagonalDifference([3][1,2,3,4,5,6,7,8,9])

