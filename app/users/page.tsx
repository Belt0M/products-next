import { NextPage } from 'next'
import UserItem from '../components/UserItem'
import { UserServices } from '../services/UserServices'

const UsersPage: NextPage = async () => {
	const users = await UserServices.getAll()

	return (
		<main className='p-12'>
			<div className='grid grid-cols-8 mt-8'>
				{users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		</main>
	)
}

export default UsersPage
