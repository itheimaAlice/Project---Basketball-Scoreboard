let count1 = 0
let count2 = 0
let resultHome = document.getElementById("home")
let resultGuest = document.getElementById("guest")

function add1() {
    count1 += 1
    console.log(count1) 
    resultHome.innerHTML = count1
}

function add2() {
    count1 += 2
    console.log(count1)
    resultHome.innerHTML = count1
}

function add3() {
    count1 += 3
    console.log(count1)
    resultHome.innerHTML = count1
}

function add4() {
    count2 += 1
    console.log(count2)
    resultGuest.innerHTML = count2
}

function add5() {
    count2 += 2
    console.log(count2)
    resultGuest.innerHTML = count2
}

function add6() {
    count2 += 3
    console.log(count2)
    resultGuest.innerHTML = count2
}
