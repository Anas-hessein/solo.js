let sco = 0
let scor = 0

document.getElementById("sco").textContent = sco
document.getElementById("scor").textContent = scor

function add1() {
    sco += 1
    document.getElementById("sco").textContent = sco

}
function add2() {
    sco += 2
    document.getElementById("sco").textContent = sco

}
function add3() {
    sco += 3
    document.getElementById("sco").textContent = sco
}

function add4() {
    scor += 1
    document.getElementById("scor").textContent = scor
}

function add5() {
    scor += 2
    document.getElementById("scor").textContent = scor
}

function add6() {
    scor += 3
    document.getElementById("scor").textContent = scor
}

function reset() {
    sco = 0
    scor = 0
    document.getElementById("sco").textContent = sco
    document.getElementById("scor").textContent = scor
}