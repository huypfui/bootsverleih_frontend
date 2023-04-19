import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Protect from "./components/Protect"
import Dashboard from "./pages/Dashboard"
import "./App.css"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				{/* <Route path="/" element={<Dashboard />} /> */}
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
