import {implementation} from "#~src/isNode.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

declare function isNode(

) : any

/**
 * @brief
 * Create an instance of the function 'isNode'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'isNode'.
 */
export function isNodeFactory(context: RuntimeWrappedContextInstance) : typeof isNode {
	const project = getProject()
	const local_context : RuntimeWrappedContextInstance = {
		...context,
		_package: {
			name: project.package_json.name,
			version: project.package_json.version,
			author: project.package_json.author,
			license: project.package_json.license
		}
	}

	return function isNode() : any {
		return implementation(local_context)
	}
}
