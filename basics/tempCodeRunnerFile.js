  function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    console.log("Sum:", total);
}
sum(1, 2, 3, 4, 5);
