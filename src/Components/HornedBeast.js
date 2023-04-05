import { useState } from 'react';

function HornedBeast({ title, description, imageURL }) {
	const [votes, addVote] = useState(0);

	function voteHandler() {
		addVote(votes + 1);
	}
	return (
		<div
			className="hornedBeast"
			onClick={voteHandler}>
			<h2>{title}</h2>
			<img
				src={imageURL}
				alt={title}
				title={title}></img>
			<p>{description}</p>
			<h3>Votes: {votes}</h3>
		</div>
	);
}

export default HornedBeast;
