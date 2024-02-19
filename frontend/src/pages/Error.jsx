import MainNavigation from '../components/MainNavigation'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'

export const Error = () => {
	const error = useRouteError()

	let title = 'An error occured!'
	let message = 'Something went wrong'

	if (error.status === 500) {
		title = 'Something went wrong'
		// message = JSON.parse(error.data).message

        message = error.data.message // if you use json method from react router (don't need to parse)
	}

	if (error.status === 404) {
		title = 'Not Found'
		message = 'Could not find resource or page'
	}

	return (
		<>
			<MainNavigation />
			<PageContent title={title}>
				<p>{message}</p>
			</PageContent>
		</>
	)
}
