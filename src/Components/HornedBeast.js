import { useState } from 'react';

function HornedBeast({ title, description, imageURL, theme, modalHandler }) {
	const [votes, addVote] = useState(0);

	function voteHandler() {
		addVote(votes + 1);
	}
	return (
		<div className={`${theme} hornedBeast`}>
			<h2 onClick={modalHandler}>{title}</h2>
			<img
				src={imageURL}
				alt={title}
				title={title}
				onClick={modalHandler}></img>
			<p>{description}</p>
			<div className="voting">
				<button onClick={voteHandler}>Vote</button>
				<h3>🐾 {votes}</h3>
			</div>
		</div>
	);
}

export default HornedBeast;
