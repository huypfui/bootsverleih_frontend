import Boat from "./Boat"

const ListBoats = ({ boats }) => {
	return (
		<div>
			{boats.map((item, key) => (
				<Boat key={key} boat={item} />
			))}
		</div>
	)
}

export default ListBoats
