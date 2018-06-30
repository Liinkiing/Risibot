import Command from '../bot/Command'
import RisibankApiWrapper from '../wrapper/RisibankApiWrapper'
import {bold} from '../utils/text'

const risibankCmd = (new Command('risibank', async (params, modifier, bot, message) => {
	if (!params.name) {
		message.channel.send(bold('AYAAAA') + ' ! Il me faut un terme à rechercher pour que je puiss parcourir risibank tel un ingésclave')
	} else {
		message.channel.send(`Ok je cherche ${params.name}`)
		try {
			const risipic = await RisibankApiWrapper.getRisipic(params.name)
			message.channel.send(risipic.url)
		} catch (e) {
			message.channel.send(bold('AYAAAA') + ' ! J\'suis désolé mon khey mais j\'ai rien trouvé ')
		}
	}
}, 'Cherche une image sur risibank'))
	.addParameter('name')

export {
	risibankCmd
}