const name = "Yuvraj Singh";
function morning() {
    return "Hello, welcome to JS modules!";
}

export default function add(a, b) {
    return a + b;
}

export { name, morning };
