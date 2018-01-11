import matches from "./matches";

/**
 * Return ancestor or self that matches `selectors`.
 *
 * @param {Element} el
 * @param {string} selectors
 */
export default function ancestorOrSelf(el, selectors) {
	if (el == null) {
		return null;
	}

	return matches(el, selectors) ? el : ancestorOrSelf(el.parentNode, selectors);
}