let sqNaturalNum = 0;
let sumSqNaturalNum = 0;

for (let i = 1; i <= 100; i++) {
	sqNaturalNum += Math.pow(i, 2);
	sumSqNaturalNum += i;
}

console.log("ans", Math.pow(sumSqNaturalNum, 2) - sqNaturalNum);
