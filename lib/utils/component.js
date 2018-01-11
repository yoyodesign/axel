import querySelectorAll from "./querySelectorAll";
import ready from "./ready";

/**
 * Component function.
 *
 * @param {string} selectors
 * @param {Function} handler
 */
export default function component(selectors, handler) {
	ready(function () {
		const els = querySelectorAll(selectors);

		for (const i in els) {
			const el = els[i];

			handler(el);
		}
	});
}