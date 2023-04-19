// Fertige Boats Seit zum Einfügen ins Dashboard mit allen Componenten zum Reservations
import List from "../../utils/List"
import { useEffect, useState } from "react"
import AddReservation from "./AddReservation"
import Reservation from "./Reservation"

const Reservations = (props) => {
	const [reservation, setReservations] = useState([])
	const [refresh, setRefresh] = useState(false)

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION + "/reservations", {
				headers: {
					authorization: localStorage.getItem("user"),
				},
			})
			console.log(res)
			const data = await res.json()
			console.log("fff", data)
			setReservations(data)
		}
		getData()
	}, [refresh])
	return (
		<div>
			<AddReservation refresh={setRefresh} />
			<List array={reservation} Element={Reservation} />
		</div>
	)
}

export default Reservations
