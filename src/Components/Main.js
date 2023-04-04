import HornedBeast from './HornedBeast';

function Main() {
	return (
		<div className="main">
			<h1>Horned Beasts</h1>
			<div className="beastDisplay">
				<HornedBeast
					title="Rhino"
					imageURL="https://www.savingthesurvivors.org/wp-content/uploads/2022/10/black_rhino_tn-280x300.png"
					description="Rhinos can run at speeds of up to 30mph"
				/>
				<HornedBeast
					title="Deer"
					imageURL="https://nationalzoo.com.au/wp-content/uploads/2017/03/fallow-deer.png"
					description="There are over 60 different species of deer worldwide. Deer are present on all continents except Antarctica. They can live in a range of habitats, from mountainous areas to warm and wet rainforests. The Barbary red deer is the only species present in Africa"
				/>
				<HornedBeast
					title="Goat"
					imageURL="https://p7.hiclipart.com/preview/332/112/893/rove-goat-sheep-stock-photography-stock-illustration-vector-kawaii-goat.jpg"
					description="Goats are able to differentiate between happy and unhappy human faces. And they have been found to prefer happy faces! "
				/>
			</div>
		</div>
	);
}

export default Main;
