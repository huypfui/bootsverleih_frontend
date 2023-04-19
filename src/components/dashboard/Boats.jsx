// Fertige Boats Seit zum Einfügen ins Dashboard mit allen Componenten zum Boats
import List from "../utils/List"
import { useEffect, useState } from "react"
import AddBoat from "./boats/AddBoat"
import Boat from "./boats/Boat"
import ListBoats from "./boats/ListBoats"

const Boats = (props) => {
	const [boats, setBoats] = useState([])
	const [refresh, setRefresh] = useState(false)

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION + "/boats", {
				headers: {
					authorization: localStorage.getItem("user"),
				},
			})
			console.log(res)
			const data = await res.json()
			console.log("fff", data)
			setBoats(data)
		}
		getData()
	}, [refresh])
	return (
		<div>
			<AddBoat refresh={setRefresh} />
			{/* <ListBoats boats={boats} /> */}
			<List array={boats} Element={Boat} />
		</div>
	)
}

export default Boats
