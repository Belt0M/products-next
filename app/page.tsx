import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex justify-center items-center flex-col'>
			<Link href='/users' className='btn btn-primary'>
				Users
			</Link>
		</main>
	)
}
