import HornedBeast from './HornedBeast';
import data from './data.json';

function Main({ theme, modalHandler }) {
	return (
		<div className={`${theme + 'main'} main`}>
			<h1>Horned Beast Encyclopeadia</h1>
			<div className="beastDisplay">
				{data.map(({ title, description, image_url, _id, keyword, horns }) => (
					<HornedBeast
						title={title}
						imageURL={image_url}
						description={description}
						theme={theme}
						modalHandler={modalHandler}
					/>
				))}
			</div>
		</div>
	);
}

export default Main;
