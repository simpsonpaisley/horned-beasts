function Header({ handleMode, theme }) {
	return (
		<div className={`${theme} header`}>
			<h1>🐾 Horned Beasts</h1>
			<button
				className="lightDark"
				onClick={handleMode}>
				Dark Mode
			</button>
		</div>
	);
}

export default Header;
