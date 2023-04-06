import HornedBeast from './HornedBeast';
import data from './data.json';

function Main() {
	return (
		<div className="main">
			<h1>Horned Beast Encyclopeadia</h1>
			<div className="beastDisplay">
				{data.map(({ title, description, image_url, _id, keyword, horns }) => (
					<HornedBeast
						title={title}
						imageURL={image_url}
						description={description}
					/>
				))}
			</div>
		</div>
	);
}

export default Main;
