function BeastModal({ theme, modalHandler, modalInformation }) {
	return (
		<div className="modalBackground">
			<div className={`${theme + 'Mode'} modal`}>
				<button onClick={modalHandler}>X</button>
				<h2>{modalInformation.title}</h2>
				<img
					src={modalInformation.image_url}
					className="modalImage"
					alt={modalInformation.title}></img>
			</div>
		</div>
	);
}

export default BeastModal;
