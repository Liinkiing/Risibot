import axios from 'axios'

class RisificApiWrapper {

	constructor () {
		this.baseUrl= process.env.RISIBOT_API
		console.log(this.baseUrl)
	}

	async getAllPost () {
		return (await axios.get(`${this.baseUrl}/risific/all`)).data
	}

	async getRandomPost () {
		return (await axios.get(`${this.baseUrl}/risific/random`)).data
	}

}

const instance = new RisificApiWrapper()
export default instance