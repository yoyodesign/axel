/**
 * Matches polyfill.
 *
 * @param {Element} el
 * @param {string} selectors
 */
export default function matches(el, selectors) {
	if (el == null) {
		return null;
	}

	const fn = el.matches || el.msMatchesSelector;

	if (!fn) {
		return null;
	}

	return fn.call(el, selectors);
}