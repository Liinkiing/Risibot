/* eslint-disable no-console */
import './src/utils/functions'
import RisitasBot from './src/bot/RisitasBot'
import {helpCmd, gangeCmd, issouCmd, pierreCmd} from './src/commands/general'
import {randomFicCmd} from './src/commands/risific'

const bot = new RisitasBot()
bot.commandPrefix = '!'

bot.addCommands([helpCmd, randomFicCmd, gangeCmd, issouCmd, pierreCmd])

bot.run()