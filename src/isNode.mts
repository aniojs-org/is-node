import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

export function implementation(
	wrapped_context: RuntimeWrappedContextInstance
) : boolean {
	const context = useContext(wrapped_context, 0)

	if (typeof window !== "undefined") {
		return false
	}

	if (typeof process === "undefined") {
		return false
	}

	return true
}
