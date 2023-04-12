function BeastModal({ theme, modalHandler }) {
	return (
		<div className="modalBackground">
			<div className={`${theme} modal`}>
				<button onClick={modalHandler}>X</button>
				<p>This is working.</p>
			</div>
		</div>
	);
}

export default BeastModal;
