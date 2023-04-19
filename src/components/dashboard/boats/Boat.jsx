const Boat = ({ item }) => {
	return (
		<>
			<div>{item.name}</div>
			<div className="w-full h-[3px]" style={{ backgroundColor: item.color }}></div>
		</>
	)
}

export default Boat
