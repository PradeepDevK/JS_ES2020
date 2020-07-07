const doMath = async (num1, num2) => {
    if (num1 && num2) {
        const math = await import('./math.js');
        console.log(math.add(5, 10));
    }
}

doMath(4, 2);