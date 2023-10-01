import Link from 'next/link'
import { FC } from 'react'
import { IUser } from '../types/IUser'

interface IUserItemProps {
	user: IUser
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
	return (
		<div className='max-w-10rem p-4 bg-orange-200 rounded-md mb-4'>
			<h2 className='min-h-16'>{user.name}</h2>
			<Link
				href={`/users/${user.id}`}
				className='text-orange-500 hover:text-orange-700 transition-all'
			>
				See Profile
			</Link>
		</div>
	)
}

export default UserItem
