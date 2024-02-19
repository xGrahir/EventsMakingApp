import { useParams, json, useRouteLoaderData, redirect } from 'react-router-dom'
import EventItem from '../components/EventItem'

export const EventDetail = () => {
	// const data = useLoaderData()
	const data = useRouteLoaderData('event-detail')
	const event = data.event

	return <EventItem event={event} />
}

export const singleEventLoader = async ({ request, params }) => {
	const id = params.eventID

	const response = await fetch(`http://localhost:8080/events/${id}`)

	if (!response.ok) {
		throw json({ message: 'Could not load event' }, { status: 500 })
	}

	return response
}

export const action = async ({ request, params }) => {
	const id = params.eventID

	// const data = await request.formData()
	// console.log(data.get('title'));

	const response = await fetch(`http://localhost:8080/events/${id}`, {
		method: 'DELETE',
	})

	if(!response.ok) {
		throw json({ message: 'Could not delete event' }, { status: 500 })
	}

	return redirect('/events')
}
