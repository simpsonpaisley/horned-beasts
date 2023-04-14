import HornedBeast from './HornedBeast';
import data from './data.json';

function Main({ theme, modalHandler }) {
	return (
		<div className={`${theme + 'Mode' + 'main'} main`}>
			<h1>Horned Beast Encyclopeadia</h1>
			<div className="beastDisplay">
				{data.map((beast) => (
					<HornedBeast
						beast={beast}
						theme={theme}
						modalHandler={modalHandler}
					/>
				))}
			</div>
		</div>
	);
}

export default Main;
