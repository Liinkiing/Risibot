/* eslint-disable no-console */
import './src/utils/functions'
import RisitasBot from './src/bot/RisitasBot'
import {helpCmd, gangeCmd, issouCmd} from './src/commands/general'
import {randomFicCmd} from './src/commands/risific'
import {risibankCmd} from './src/commands/risibank'

const bot = new RisitasBot()
bot.commandPrefix = '!'

bot.addCommands([helpCmd, randomFicCmd, gangeCmd, issouCmd, risibankCmd])

bot.run()