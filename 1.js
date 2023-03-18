let sum = 0;
const num = 1000;

for (let i = 1; i < num; i++) {
	if (i % 3 === 0 || i % 5 === 0) sum += i;
}

console.log("sum", sum);
