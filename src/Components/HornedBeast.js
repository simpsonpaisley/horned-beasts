function HornedBeast(props) {
	let { title, description, imageURL } = props;
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
