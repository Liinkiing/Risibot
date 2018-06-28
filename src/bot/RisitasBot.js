/* eslint-disable no-console */
const Discord = require('discord.js')

class RisitasBot {

	constructor () {
		this.client = new Discord.Client()
		this.commandPrefix = '/'
		this.commands = []
	}

	displayCommandInfo (command) {
		let help = `- ${this.commandPrefix}*${command.name}*`
		command.parameters.forEach(parameter => {
			help += ` ${parameter.options.required ? '<' : '['}${parameter.name}${parameter.options.required ? '>' : ']'}`
		})
		help += ` ${command.description ? '- **' + command.description + '**' : ''}\n`
		return help
	}

	getHelpText () {
		let help = `
Issou t'as besoin d'aide ? Ne t'en fais pas mon khey, je vais t'aider \n
Voici la liste des commandes \n`
		this.commands.forEach(command => {
			help += this.displayCommandInfo(command)
		})
		return help
	}

	ready () {

	}

	onMessage (message) {
		if (!message.content.startsWith(this.commandPrefix)) return
		const name = message.content.substring(1)
		this.commands.some(command => {
			if (command.name.toLowerCase() === name.toLowerCase()) {
				command.action(command.parameters, this, message)
				return true
			}
		})
	}

	addCommands (commands) {
		this.commands.push(...commands)
	}

	addCommand (command) {
		this.commands.push(command)
	}

	removeCommand (command) {
		this.commands = this.commands.filter(c => c !== command)
	}

	run () {
		this.client.on('ready', this.ready.bind(this))
		this.client.on('message', this.onMessage.bind(this))
		this.client.login(process.env.DISCORD_SECRET)
	}

}

module.exports = RisitasBot