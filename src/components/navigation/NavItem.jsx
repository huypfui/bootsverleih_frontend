const NavItem = (props) => {
	console.log(props)
	return (
		<div className={"cursor-pointer " + (props.selected ? "border-b" : "")} onClick={() => props.setState(props.page)}>
			{props.name}
		</div>
	)
}

export default NavItem
