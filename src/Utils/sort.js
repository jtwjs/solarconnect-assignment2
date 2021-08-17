export const selectionSort = (input) => {
	let arr = [...input];

	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}

		if (minIndex !== i) {
			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
		}
	}

	return arr;
};

export const quickSort = (arr, l, r) => {
	if (l < r) {
		const p = partition(arr, l, r);

		quickSort(arr, l, p - 1);
		quickSort(arr, p + 1, r);
	}

	return arr;
};

const partition = (arr, l, r) => {
	const pivot = arr[r];
	let i = l - 1;

	for (let j = l; j <= r - 1; j++) {
		if (arr[j] >= pivot) {
			i++;
			const temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
	const temp = arr[i + 1];
	arr[i + 1] = arr[r];
	arr[r] = temp;

	return i + 1;
};