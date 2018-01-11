/**
 * Runs handler when the DOM is ready.
 *
 * @param {Function} handler
 */
export default function ready(handler) {
	if (document.readyState !== "loading") {
		handler();
	} else {
		document.addEventListener("DOMContentLoaded", handler);
	}
}