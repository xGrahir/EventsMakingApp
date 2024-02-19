import { useParams, useRouteLoaderData, json, redirect } from "react-router-dom"
import EventForm from '../components/EventForm'


export const EditEvent = () => {

    const data = useRouteLoaderData('event-detail')

    return <EventForm event={data.event} method='patch'/> //useParams
}

export const action = async({request, params}) => {
    const id = params.eventID

    const data = await request.formData()
	const eventData = {
		title: data.get('title'),
		date: data.get('date'),
		image: data.get('image'),
		description: data.get('description'),
	}

    const response = await fetch(`http://localhost:8080/events/${id}`, {
		method: 'PATCH',
        body: JSON.stringify(eventData),
		headers: {
			'Content-Type': 'application/json',
		},
	})

    if(response === 422) {
        return response
    }

    return redirect('/events')
}