import { useState } from "react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
	const [error, setError] = useState(false)
	const emailRef = useRef()
	const navigate = useNavigate()
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION

	const register = async () => {
		try {
			const res = await fetch(url + "/register", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({ email: emailRef.current.value }),
			})
			if (!res.ok) {
				setError(true)
			} else {
				const user = await res.json()
				localStorage.setItem("user", user._id)
			}
		} catch (err) {
			console.log(err)
		}
	}

	const login = async () => {
		try {
			const res = await fetch(url + "/login", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({ email: emailRef.current.value }),
			})
			if (!res.ok) {
				setError(true)
			} else {
				const user = await res.json()
				localStorage.setItem("user", user._id)
				navigate("/dashboard")
			}
		} catch (err) {}
	}
	return (
		<main className="flex justify-center items-center h-screen">
			<div className="flex flex-col w-1/4">
				<div className=" border-b2 text-lg text-center">SuperCode Logistics</div>
				<p className="mt-10 text-sm">E-Mail</p>
				<input className="border-b mb-5" type="email" ref={emailRef} />
				<div className="flex flex-row justify-between mt-8">
					<button className="px-5 py-2 bg-blue-200 rounded " onClick={register}>
						Register
					</button>
					<button className="px-5 py-2 bg-purple-400 rounded" onClick={login}>
						Login
					</button>
				</div>
				{error && <div className="bg-red-600 text-white rounded my-3 px-2">Das hat leider nicht geklappt</div>}
			</div>
		</main>
	)
}

export default Login
