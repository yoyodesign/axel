/**
 * Pads start of string.
 * @param {string} value
 * @param {number} targetLength
 * @param {string} padString [" "]
 * @return {string}
 */
export default function padStart(value, targetLength, padString = " ") {
	if (value.length >= targetLength) {
		return value;
	}

	return padStart(padString + value, targetLength, padString);
}