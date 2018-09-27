module.exports = function solveEquation(equation) {

    let arr = equation.split(' ');
    let result = [];
    let A = arr[0];
    let B = arr[3] + arr[4];
    let C = arr[7] + arr[8];
    let D = Math.pow(B,2) - 4 * A * C;


    if (D > 0) {
        result[0] = Math.round(( -B + Math.sqrt(D) )/(2 * A));
        result[1] = Math.round(( -B - Math.sqrt(D) )/(2 * A));
     }

    result.sort(sortMass);

    return result;

};

function sortMass(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}