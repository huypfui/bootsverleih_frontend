import { useState } from "react"
import Navigation from "../components/navigation/Navigation"
import Boats from "../components/dashboard/Boats"
import Reservations from "../components/dashboard/reservations/Reservations"

const Dashboard = (props) => {
	const [page, setPage] = useState(0)
	const content = () => {
		let element
		switch (page) {
			case 0:
				return <h1>Dashboard</h1>
			case 1:
				return <Boats />
			case 2:
				return <Reservations />
		}
	}
	return (
		<main>
			<Navigation setPage={setPage} page={page} />
			{content()}
		</main>
	)
}

export default Dashboard
