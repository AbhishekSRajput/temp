let ans = 1;
const greatCommonDivisor = (a, b) => {
	if (b === 0) return a;
	return greatCommonDivisor(b, a % b);
};

for (let i = 2; i < 10; i++) {
	ans = (ans * i) / greatCommonDivisor(i, ans);
}

console.log(ans);
