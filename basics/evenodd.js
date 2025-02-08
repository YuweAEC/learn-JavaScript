const evenOrodd = (num) => {
    if (num % 2 === 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
};

evenOrodd(4);

const isDivisibleByThree = (num) => {
    if (num % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
};

isDivisibleByThree(4);

const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};

isEven(4);

const isDivisibleByThreeAndTwo = (num) => {
    if (num % 2 === 0 , num % 3 ===0) {
        return true;
    }
    else {
        return false;
    }
};

isDivisibleByThreeAndTwo(4);