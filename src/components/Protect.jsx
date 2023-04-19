import { Navigate, Outlet } from "react-router-dom"

const Protect = ({ client }) => {
	if (!client) return <Navigate to={"/"} replace />
	return <Outlet />
}

export default Protect
