import RisitasBot from './src/RisitasBot'
import dotenv from 'dotenv'

dotenv.config()

const bot = new RisitasBot()
bot.run()