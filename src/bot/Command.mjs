export default class Command {

	/**
	 * @param {string} name
	 * @param {callback} action
	 * @param {?string} description
	 */
	constructor (name, action, description = null) {
		this.name = name
		this.action = action
		this.description = description
		this.parameters = []
		this.modifiers = []
	}

	addParameter (name, options) {
		options = Object.assign({
			required: true,
			description: null
		}, options)
		this.parameters.push({name, options})

		return this
	}

	addModifier (name) {
		this.modifiers.push(name)
		this.modifiers.unique()

		return this
	}



}