import { Outlet, useNavigation } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

export const Root = () => {
	const navigation = useNavigation()

	return (
		<>
			<MainNavigation />
			<main>
				{/* {navigation.state === 'loading' && <p>loading...</p>} */}
				<Outlet />
			</main>
		</>
	)
}
