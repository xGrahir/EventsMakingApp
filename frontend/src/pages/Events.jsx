import EventsList from '../components/EventsList'
import { useEffect, useState } from 'react'
import { useLoaderData, json } from 'react-router-dom'

export const Events = () => {
	const data = useLoaderData()
	const events = data.events

	// const error = data.isError
	// const message = data.message

	// const [isLoading, setLoading] = useState(false)
	// const [fetchedData, setFetchedData] = useState()
	// const [error, setError] = useState()

	// useEffect(() => {
	// 	const getEvents = async () => {
	// 		setLoading(true)
	// 		try {
	// 			const response = await fetch('http://localhost:8080/events')
	// 			const data = await response.json()

	// 			if (!response.ok) {
	// 				throw new Error('Smth went wrong')
	// 			}

	// 			setFetchedData(data.events)
	// 			setError('')
	// 			setLoading(false)
	// 		} catch (err) {
	// 			setError('Fetching events failed')
	// 			setLoading(false)
	// 		}
	// 	}

	// 	getEvents()
	// }, [])

	return (
		<>
			{/* <div style={{ textAlign: 'center' }}>
				{isLoading ? <p>Loading events...</p> : ''}
				{error ? <p>{error}</p> : ''}
			</div>
			
			{!isLoading && fetchedData ? <EventsList events={events} /> : ''} */}

			{/* {error ? <p>{message}</p> : <EventsList events={events} />}  return in response loader, next way is to throw an error in loader's return*/}

			<EventsList events={events} />
		</>
	)
}

export const fetchHandler = async () => {
	const response = await fetch('http://localhost:8080/events')
	// const data = await response.json()

	if (!response.ok) {
		// return {isError: true, message: 'Could not fetch data'}
		// throw 'Could not fetch data' // throws error that provides to Error's page in errorElement of createBrowseRouter

		// throw new Response(JSON.stringify({ message: 'Could not fetch events' }, { status: 500 }))

		// easier way provided by router

		throw json({ message: 'Could not fetch events' }, { status: 500 })
	}

	return response

	// return data.events
}
