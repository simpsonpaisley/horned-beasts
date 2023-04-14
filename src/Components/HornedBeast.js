import { useState } from 'react';

function HornedBeast({ beast, modalHandler, theme }) {
	const [votes, addVote] = useState(0);

	function voteHandler() {
		addVote(votes + 1);
	}
	return (
		<div className={`${theme + 'Mode'} hornedBeast`}>
			<h2 onClick={() => modalHandler(beast)}>{beast.title}</h2>
			<img
				src={beast.image_url}
				alt={beast.title}
				title={beast.title}
				onClick={() => modalHandler(beast)}></img>
			<p>{beast.description}</p>
			<div className="voting">
				<button onClick={voteHandler}>Vote</button>
				<h3>🐾 {votes}</h3>
			</div>
		</div>
	);
}

export default HornedBeast;
