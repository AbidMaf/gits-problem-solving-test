function sloaneOEIS(n) {
    const arr = []
    for(let i = 0; i < n; i++) {
        // Rumus: n(n + 1) / 2 + 1
        arr.push(((i * (i + 1)) / 2) + 1)
    } 

    return arr;
}

console.log({
    case_1: {
        input: 7,
        output: sloaneOEIS(7)   
    },
    case_2: {
        input: 23,
        output: sloaneOEIS(23)   
    },
    case_3: {
        input: 100,
        output: sloaneOEIS(100)   
    }
});