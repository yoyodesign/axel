function addWindowScrollY(value) {
	return window.pageYOffset + value;
}

export default function getOffset(element) {
	const rect = element.getBoundingClientRect();

	return {
		top: addWindowScrollY(rect.top),
		right: addWindowScrollY(rect.right),
		bottom: addWindowScrollY(rect.bottom),
		left: addWindowScrollY(rect.left),
		width: rect.width,
		height: rect.height
	};
}