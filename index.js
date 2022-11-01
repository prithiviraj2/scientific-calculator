let result = document.getElementById("output");

function number(num) {
    result.value += num;
}

function equal() {
    result.value = eval(result.value);
}
function sin() {
    result.value = Math.sin(result.value);
}

function cos() {
    result.value = Math.cos(result.value);
}

function tan() {
    result.value = Math.tan(result.value);
}
function Clear() {
    result.value = "";
}
function square() {
    result.value = Math.pow(result.value, 2);
}

function cubed() {
    result.value = Math.pow(result.value, 3);
}

function sqrt2() {
    result.value = Math.pow(result.value, 1 / 2);
}

function sqrt3() {
    result.value = Math.pow(result.value, 1 / 3);
}
function del() {
    result.value = result.value.slice(0, - 1);
}
