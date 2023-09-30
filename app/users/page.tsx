import { NextPage } from 'next'
import { UserServices } from '../services/UserServices'

const UsersPage: NextPage = async () => {
	const users = await UserServices.getAll()

	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map(user => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	)
}

export default UsersPage
