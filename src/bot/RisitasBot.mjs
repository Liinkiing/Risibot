/* eslint-disable no-console */
import Discord from 'discord.js'
import {bold, italic} from '../utils/text'

export default class RisitasBot {

	constructor () {
		this.client = new Discord.Client()
		this.commandPrefix = '/'
		this.commands = []
	}

	displayCommandInfo (command) {
		let help = `- ${this.commandPrefix}${italic(command.name)}`
		command.parameters.forEach(parameter => {
			help += ` "${parameter.options.required ? '<' : '['}${parameter.name}${parameter.options.required ? '>' : ']'}"`
		})
		command.modifiers.forEach(modifier => {
			help += ` --${modifier}`
		})
		help += ` ${command.description ? '- ' + bold(command.description) : ''}\n`
		return help
	}

	getHelpText () {
		let help = `
Issou ${italic(bold('t\'as besoin d\'aide'))} ? Ne t'en fais pas mon khey, je vais t'aider \n
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
		const cmd = {...message}.content.substring(1).firstWord()
		this.commands.some(command => {
			if (command.name.toLowerCase() === cmd.toLowerCase()) {
				let parameters = {}
				let modifiers = []
				command.modifiers.forEach(modifier => {
					if (message.content.toLowerCase().includes('--' + modifier.toLowerCase())) modifiers.push(modifier)
				})
				if (command.parameters.length) {
					parameters[command.parameters[0].name] = message.content.extractFromQuote() || null
				}
				command.action(parameters, modifiers, this, message)
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