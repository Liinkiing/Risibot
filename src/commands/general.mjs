import Command from '../bot/Command'

const helpCmd = (new Command('risihelp', (params, modifiers, bot, message) => {
	message.channel.send(bot.getHelpText())
}, 'Affiche cette aide'))
	.addParameter('test', { description: 'Recherche ton sticker issou' })
	.addParameter('le parametere optionnel', { description: 'Recherche ton sticker issou mais jsuis optionnel', required: false })


const issouCmd = new Command('issou', (params, modifiers, bot, message) => {
	message.channel.send('AYAAAAA ' + message.author.username )
})

const gangeCmd = new Command('gange', (params, modifiers, bot, message) => {
	message.channel.send('Purification par le gange en cours...')
}, 'Permet de te purifier grâce à l\'eau du gange')

const pierreCmd = (new Command('pierre', (params, modifiers, bot, message) => {
	message.channel.send('wesh pierre')
}, 'La description du futur'))

export {
	helpCmd,
	issouCmd,
	gangeCmd,
	pierreCmd
}