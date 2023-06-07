function shopping(work1, work2) {
    /**
     * 1. work1 and work2 = buy ice cream
     * 2. work1 and work2 = buy tv 50"
     * 3. work1 xor work2 = buy tv 32"
     * 4. work1 or work2 = stay healthy
     */
    const buyIceCream = work1 || work2;
    const buyTv50     = work1 && work2;
    // const buyTv32 = !!(work1 ^ work2) // bitwise xor
    // const buyTv32 = !buyTv50;
    const buyTv32 = work1 !== work2;
    const healthy = !buyIceCream; // unary operator
    
    return { buyIceCream, buyTv50, buyTv32, healthy };
}

console.log(shopping(true, true));
console.log(shopping(true, false));
console.log(shopping(false, false));