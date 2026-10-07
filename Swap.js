let a = 100, b = -30;

function swap(a, b) {
    let swap = a;
    a = b;
    b = swap;

    console.log("a =", a, "b =", b)
}

swap(a, b)

