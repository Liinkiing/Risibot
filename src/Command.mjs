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
	}

}