import {createContext} from "@fourtune/realm-js/v0/runtime"

import {isNodeFactory as factory} from "#~synthetic/user/export/isNodeFactory.mts"

const fn = factory(createContext())

export function isNode() : boolean {
	return fn()
}
