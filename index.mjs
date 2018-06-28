/* eslint-disable no-console */
import dotenv from 'dotenv'
import RisitasBot from './src/bot/RisitasBot'
import {helpCmd, gangeCmd, issouCmd, pierreCmd} from './src/commands/general'


dotenv.config()

const bot = new RisitasBot()
bot.commandPrefix = '!'

bot.addCommands([helpCmd, gangeCmd, issouCmd, pierreCmd])

bot.run()