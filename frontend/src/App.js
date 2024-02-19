import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Root } from './pages/Root'
import { Events, fetchHandler as eventsLoader } from './pages/Events'
import { EventDetail, singleEventLoader, action as deleteEvent } from './pages/EventDetail'
import { NewEvent, action as saveNewEvent } from './pages/NewEvent'
import { EditEvent, action as saveEditedEvent } from './pages/EditEvent'
import { RootEvent } from './pages/RootEvent'
import { Error } from './pages/Error'
import { NewsletterPage, action as newsletterAction } from './pages/Newsletter'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Root />,
			errorElement: <Error />,
			children: [
				{ index: true, element: <Home /> },
				{
					path: 'events',
					element: <RootEvent />,
					children: [
						{
							index: true,
							element: <Events />,
							loader: eventsLoader,
						},
						{
							path: ':eventID',
							id: 'event-detail',
							loader: singleEventLoader,
							children: [
								{ index: true, element: <EventDetail />, action: deleteEvent },
								{ path: 'edit', element: <EditEvent />, action: saveEditedEvent },
							],
						},

						{ path: 'new', element: <NewEvent />, action: saveNewEvent },
					],
				},
				{
					path: 'newsletter',
					element: <NewsletterPage />,
					action: newsletterAction,
				},
			],
		},
	])

	return <RouterProvider router={router} />
}

export default App
