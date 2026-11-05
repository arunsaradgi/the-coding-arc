function pattern2(n) {

    for (i = 0; i < n; i++) {
        let output = ""
        for (let j = 0; j <= i; j++) {
            output += '* '
        }
        console.log(output)
    }
}

function pattern3(n) {
    for (let i = 0; i < n; i++) {
        let output = ""
        for (let j = 0; j <= i; j++) {
            output += (j + 1) + " "
        }
        console.log(output)
    }
}

function pattern4(n) {
    for (let i = 0; i < n; i++) {
        let output = ""
        for (let j = 0; j <= i; j++) {
            output += (i + 1) + " "
        }
        console.log(output)
    }
}
function pattern5(n) {
    for (let i = 0; i < n; i++) {
        let output = ""
        for (let j = 0; j < n - i; j++) {
            output += "* "
        }
        console.log(output)
    }
}
function pattern6(n) {
    for (let i = 0; i < n; i++) {
        let output = ""
        for (let j = 0; j < n - i; j++) {
            output += j + 1
        }
        console.log(output)
    }
}
function pattern7(n) {
    for (let i = 0; i < n; i++) {
        let output = ""
        for (let j = 0; j < n - i - 1; j++) {
            output += "_"
        }
        for (let k = 0; k < i * 2 + 1; k++) {
            output += "*"
        }
        for (let l = 0; l < n - i - 1; l++) {
            output += "_"
        }

        console.log(output)
    }
}


function pattern8(n) {
    for (let i = 0; i < n; i++) {
        let output = ""
        for (let j = 0; j < i; j++) {
            output += "_"
        }
        for (let k = 0; k < (2 * n - (2 * i + 1)); k++) {
            output += "*"
        }
        for (let l = 0; l < i; l++) {
            output += "_"
        }

        console.log(output)
    }
}

function pattern9(n) {
    for (let i = 0; i < 2 * n - 1; i++) {
        let stars = i
        let output=""

        if(i>n-1){
            stars=2*n-(i+2)
        }

        for (let j = 0; j <= stars; j++) {
            output+='*'
        }
        console.log(output)
    }
}



// pattern2(6)
// pattern3(5)
// pattern4(5)
// pattern5(5)
// pattern7(5)
// pattern8(5)

pattern9(5)