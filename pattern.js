function pattern(count) {

    for (let i = 0; i < count; i++) {
        let output = ''
        for (let j = 0; j < count; j++) {
            output += "*"
        }
        console.log(output)
    }

}

pattern(4)