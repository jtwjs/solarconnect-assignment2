export default {
	isNumericOnly(data) {
		if (!data) {
			return false
		}
		const regex = /[0-9]/;

		return regex.test(data);
	},

	isNumericAndCommaOnly(data) {
		if (!data) {
			return false
		}
		const regex = /^([0-9]+[/,]{0,1})*$/;

		return regex.test(data);
	}
}