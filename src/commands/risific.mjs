import Command from '../bot/Command'
import Discord from 'discord.js'
import RisificApiWrapper from '../wrapper/RisificApiWrapper'

const createEmbedFromPost = (post) => {
	return (new Discord.RichEmbed())
		.setTitle(post.title)
		.setThumbnail(post.thumbnail)
		.setURL(post.url)
}

const randomFicCmd = (new Command('risific', async (params, modifiers, bot, message) => {
	if (modifiers.includes('random')) {
		const post = await RisificApiWrapper.getRandomPost()
		message.channel.send(createEmbedFromPost(post))
	} else {
		const posts = await RisificApiWrapper.getAllPost()
		posts.forEach(post => {
			message.channel.send(createEmbedFromPost(post))
		})
	}
}, 'Permet de te prélasser tel un seigneur en lisant une bonne fic des kheys'))
	.addModifier('random')

export {
	randomFicCmd
}