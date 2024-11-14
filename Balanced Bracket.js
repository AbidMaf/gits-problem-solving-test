const input_1 = "{ [ ( ) ] }";
const input_2 = "{ [ ( ] ) }";
const input_3 = "{ ( ( [ ] ) [ ] ) [ ] }";

function balancedBracket(brackets) {
    brackets = brackets.split(" ");
    let stack = [];
    const open_brackets = ["{", "(", "["];
    const close_brackets = ["}", ")", "]"];

    // Iterasi terhadap input yang sudah displit menjadi array dan implementasi stack
    brackets.forEach(element => {
        if(open_brackets.includes(element)) {
            stack.push(element);
        }

        // Jika element merupakan kurung tutup 
        // DAN indeks dari elemen terhadap close_brackets sama dengan indeks dari elemen terakhir pada stack terhadap open_brackets 
        if(close_brackets.includes(element) && close_brackets.indexOf(element) === open_brackets.indexOf(stack.at(-1))) {
            stack.pop()
        }
    });

    return stack.length > 0 ? "NO" : "YES";
}

console.log(({
    case_1: {
        input: '{ [ ( ) ] }',
        output: balancedBracket('{ [ ( ) ] }'),
    },
    case_2: {
        input: '{ [ ( ] ) }',
        output: balancedBracket('{ [ ( ] ) }'),
    },
    case_3: {
        input: '{ ( ( [ ] ) [ ] ) [ ] }',
        output: balancedBracket('{ ( ( [ ] ) [ ] ) [ ] }')
    },
}))