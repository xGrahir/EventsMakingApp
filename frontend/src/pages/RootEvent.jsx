import EventsNavigation from '../components/EventsNavigation'
import { Outlet } from 'react-router-dom'

export const RootEvent = () => {
	return (
		<>
			<EventsNavigation />
			<Outlet />
		</>
	)
}
