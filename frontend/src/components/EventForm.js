import { useNavigate, useNavigation, Form, useActionData } from 'react-router-dom'

import classes from './EventForm.module.css'

function EventForm({ method, event }) {
	const data = useActionData() // to handle errors from backend || opposite of loaderData

	const navigation = useNavigation()
	const navigate = useNavigate()
	const submitting = navigation.state === 'submitting'

	function cancelHandler() {
		navigate('..')
	}

	return (
		<Form className={classes.form} method={method}>
			{data && data.errors && (
				<>
					<ul>
						{Object.values(data.errors).map(err => (
							<li key={err}>{err}</li>
						))}
					</ul>
				</>
			)}
			<p>
				<label htmlFor='title'>Title</label>
				<input id='title' type='text' name='title' required defaultValue={event ? event.title : ''} />
			</p>
			<p>
				<label htmlFor='image'>Image</label>
				<input id='image' type='url' name='image' required defaultValue={event ? event.image : ''} />
			</p>
			<p>
				<label htmlFor='date'>Date</label>
				<input id='date' type='date' name='date' required defaultValue={event ? event.date : ''} />
			</p>
			<p>
				<label htmlFor='description'>Description</label>
				<textarea id='description' name='description' rows='5' required defaultValue={event ? event.description : ''} />
			</p>
			<div className={classes.actions}>
				<button type='button' onClick={cancelHandler}>
					Cancel
				</button>
				<button disabled={submitting}>{submitting ? 'Submitting' : 'Save'}</button>
			</div>
		</Form>
	)
}

export default EventForm
