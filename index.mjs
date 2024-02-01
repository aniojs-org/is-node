export default function isNode() {
	if (typeof window !== "undefined") {
		return false
	}

	if (typeof process === "undefined") {
		return false
	}

	return true
}
