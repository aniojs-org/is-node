import {generateFactoryFiles} from "@fourtune/realm-js/v0/autogenerate"

export default {
	realm: {
		name: "js",
		type: "package",

		options: {
			runtime: "agnostic"
		}
	},

	autogenerate: {
		...generateFactoryFiles({
			source_file: "src/isNode.mts",
			export_name: "isNode",
			destination: "src/export"
		})
	}
}
