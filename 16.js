const num = String(BigInt(Math.pow(2, 1000)));

const result = num.split("").reduce((sum, value) => sum + Number(value), 0);

console.log(result);
