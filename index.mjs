/* eslint-disable no-console */
import dotenv from 'dotenv'
import RisitasBot from './src/RisitasBot'
import Command from './src/Command'

dotenv.config()

const bot = new RisitasBot()

bot.addCommand(new Command('helpkhey', (client, message) => {
	message.channel.send(bot.getHelpText())
}, 'Affiche cette aide'))

bot.addCommand(new Command('issou', (client, message) => {
	message.channel.send('AYAAAAA ' + message.channel.recipient.username )
}))

bot.addCommand(new Command('gange', (client, message) => {
	message.channel.send('Purification par le gange en cours...')
}, 'Permet de te purifier grâce à l\'eau du gange'))

bot.run()