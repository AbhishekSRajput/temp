const limit = 1000;

for (let i = 0; i < limit; i++) {
	for (let j = i + 1; j < limit; j++) {
		const k = limit - i - j;
		if (i * i + j * j === k * k) {
			console.log(i * j * k, i, j, k);
		}
	}
}
