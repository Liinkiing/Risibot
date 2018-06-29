const bold = (text) => {
	return `**${text}**`
}

const italic = (text) => {
	return `*${text}*`
}

const underline = (text) => {
	return `__${text}__`
}

const strikethrough = (text) => {
	return `~~${text}~~`
}

const code = (text) => {
	return '`' + text + '`'
}

const multilineCode = (text, language = null) => {
	return language ? '```' + language + '\n' + text + '```' : '```' + text + '```'
}

export {
	bold, italic, underline, strikethrough, code, multilineCode
}