import { useRef } from "react"
import { useEffect, useState } from "react"

const AddReservation = (props) => {
	// useEffect, useState for data fetch of boats
	const [boats, setBoats] = useState([])

	const startRef = useRef()
	const endeRef = useRef()
	const bootRef = useRef()

	useEffect(() => {
		Promise.all([
			fetch(import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION + "/boats", {
				headers: {
					authorization: localStorage.getItem("user"),
				},
			}),
		]).then((responds) => {
			Promise.all([responds[0].json()]).then((data) => {
				setBoats(data[0])
				console.log(data[0])
			})
		})
	}, [])

	const save = async () => {
		const res = await fetch(import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION + "/reservations", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				start: startRef.current.value,
				ende: endeRef.current.value,
				boot: bootRef.current.value,
				user: localStorage.getItem("user"),
			}),
		})
		props.refresh((prev) => !prev)
	}

	return (
		<div>
			<div>
				<p>Startdatum</p>
				<input ref={startRef} type="date" />
				<p>Enddatum</p>
				<input ref={endeRef} type="date" />
				<p>Such dir ein Boot aus</p>
				<select ref={bootRef} type="text" name="boat">
					{boats.map((item, key) => (
						<option value={item._id}>
							{item.name} - {item.bootsart}
						</option>
					))}
				</select>
				<button onClick={save}>Reservieren</button>
			</div>
		</div>
	)
}

export default AddReservation
