import axios from 'axios'
import { IUser } from '../types/IUser'

export const UserServices = {
	async getAll() {
		const { data } = await axios.get<IUser[]>(
			'https://jsonplaceholder.typicode.com/users'
		)
		return data
	},
}
