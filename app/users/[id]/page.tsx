import { UserServices } from '@/app/services/UserServices'

const UserPersonalPage = async ({ params }: { params: { id: string } }) => {
	const user = await UserServices.getOne(parseInt(params.id))

	return <main className='flex justify-center items-center	'>{user?.name}</main>
}

export default UserPersonalPage
