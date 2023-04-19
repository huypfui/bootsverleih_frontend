import { useNavigate } from "react-router-dom"
import NavItem from "./NavItem"

const Navigation = (props) => {
	const navigate = useNavigate()
	const logout = () => {
		localStorage.removeItem("user")
		navigate("/")
	}
	return (
		<nav className="flex justify-between px-5 mb-5 mt-3">
			<div className="flex gap-4">
				<NavItem name="Home" page={0} setState={props.setPage} selected={props.page === 0 ? true : false} />
				<NavItem name="Boats" page={1} setState={props.setPage} selected={props.page === 1 ? true : false} />
				<NavItem name="Reservations" page={2} setState={props.setPage} selected={props.page === 2 ? true : false} />
				{/* <NavItem name="Trips" page={3} setState={props.setPage} selected={props.page === 3 ? true : false} /> */}
			</div>

			<button onClick={logout}>Logout</button>
		</nav>
	)
}

export default Navigation
