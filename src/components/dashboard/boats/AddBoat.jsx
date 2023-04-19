import { useRef } from "react"

const AddBoat = (props) => {
	const nameRef = useRef()
	const baujahrRef = useRef()
	const seriennummerRef = useRef()
	const materialRef = useRef()
	const bootsartRef = useRef()

	const save = async () => {
		const res = await fetch(import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION + "/boats", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				name: nameRef.current.value,
				bauhjahr: baujahrRef.current.value,
				seriennummer: seriennummerRef.current.value,
				material: materialRef.current.value,
				bootsart: bootsartRef.current.value,
				user: localStorage.getItem("user"),
			}),
		})
		props.refresh((prev) => !prev)
	}
	return (
		<div>
			<div>
				<p>Name</p>
				<input ref={nameRef} type="text" />
				<p>Baujahr</p>
				<input ref={baujahrRef} type="text" />
				<p>Seriennummer</p>
				<input ref={seriennummerRef} type="text" />
				<p>Material</p>
				<input ref={materialRef} type="text" />
				<p>Bootsart</p>
				<input ref={bootsartRef} type="text" />
				<button onClick={save}>Speichern</button>
			</div>
		</div>
	)
}

export default AddBoat
