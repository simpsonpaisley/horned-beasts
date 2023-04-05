function HornedBeast({ title, description, imageURL }) {
	return (
		<div className="hornedBeast">
			<h2>{title}</h2>
			<img
				src={imageURL}
				alt={title}
				title={title}></img>
			<p>{description}</p>
		</div>
	);
}

export default HornedBeast;
