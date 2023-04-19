const List = ({ array, Element }) => {
	return (
		<div>
			{array.map((item, key) => (
				<Element item={item} />
			))}
		</div>
	)
}

export default List
