function Largest(arr) {
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }

    console.log(largest)
}

Largest([10, 20, 30, 100, 5, 50, 40])