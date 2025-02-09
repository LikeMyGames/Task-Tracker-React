import Button from "@/components/Basic Components/Button"

const ListMenuItem: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Button variant="normal">{children}</Button>
		</>
	)
}

export default ListMenuItem 