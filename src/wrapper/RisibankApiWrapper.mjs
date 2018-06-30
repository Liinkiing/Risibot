import axios from 'axios'

class RisibankApiWrapper {

	constructor () {
		this.baseUrl= process.env.RISIBOT_API
	}

	async getRisipic (query) {
		return (await axios.get(`${this.baseUrl}/risibank/search?q=${query}&random=true`)).data.randomItem()
	}

	async getRisipics (query) {
		return (await axios.get(`${this.baseUrl}/risibank/search?q=${query}&random=true`)).data
	}


}

const instance = new RisibankApiWrapper()
export default instance