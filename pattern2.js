function pattern2(n) {

    for (i = 0; i < n; i++) {
        let output = ""
        for (let j = 0; j <= i; j++) {
            output += '* '
        }
        console.log(output)
    }
}


pattern2(6)