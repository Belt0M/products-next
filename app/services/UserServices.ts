import { IUser } from '../types/IUser'

export const UserServices = {
	async getAll() {
		const data = await fetch('https://jsonplaceholder.typicode.com/users')
		const users: IUser[] = await data.json()
		return users
	},
	async getOne(id: number) {
		const data = await fetch('https://jsonplaceholder.typicode.com/users')
		const users: IUser[] = await data.json()
		const user: IUser | undefined = users.find(user => user.id === id)
		return user
	},
}
