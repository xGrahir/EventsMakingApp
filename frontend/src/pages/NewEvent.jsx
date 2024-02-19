import EventForm from '../components/EventForm'
import { json, redirect } from 'react-router-dom'

export const NewEvent = () => {
	return <EventForm method='post'/>
}

export const action = async ({ request, params }) => {
	const data = await request.formData()
	const eventData = {
		title: data.get('title'),
		date: data.get('date'),
		image: data.get('image'),
		description: data.get('description'),
	}

	const response = await fetch('http://localhost:8080/events', {
		method: 'POST',
		body: JSON.stringify(eventData),
		headers: {
			'Content-Type': 'application/json',
		},
	})

	if (response.status === 422) {
		return response
	} // From backend to show errors in EventForm

	if (!response.ok) {
		throw json({ message: 'Sending data failed' }, { status: 500 })
	}

	return redirect('/events')
}
