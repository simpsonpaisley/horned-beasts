import HornedBeast from './HornedBeast';

const beastArray = [
	{
		_id: 1,
		image_url:
			'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
		title: 'UniWhal',
		description: 'A unicorn and a narwhal nuzzling their horns',
		keyword: 'narwhal',
		horns: 1,
	},

	{
		_id: 2,
		image_url:
			'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80',
		title: 'Rhino Family',
		description: 'Parent rhino with two babies',
		keyword: 'rhino',
		horns: 2,
	},

	{
		_id: 3,
		image_url:
			'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
		title: 'Unicorn Head',
		description: 'Someone wearing a very silly unicorn head mask',
		keyword: 'unicorn',
		horns: 1,
	},

	{
		_id: 4,
		image_url:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bubo_virginianus_06.jpg/1200px-Bubo_virginianus_06.jpg',
		title: 'Great Horned Owl',
		description: 'Owl',
		keyword: 'owl',
		horns: 2,
	},

	{
		_id: 5,
		image_url:
			'https://upload.wikimedia.org/wikipedia/commons/1/12/Jackson%27s_Chameleon_2_edit1.jpg',
		title: "Jackson's Chameleon",
		description: 'Three-horned chameleon',
		keyword: 'lizard',
		horns: 3,
	},

	{
		_id: 6,
		image_url:
			'https://ourmarinespecies.com/wp-content/uploads/2018/12/Horned_marine_species_2-1024x695.jpg',
		title: 'Cowfish',
		description:
			'The cow fish is a variety of boxfish (Ostraciidae) which is easily recognizable by the long horns that protrude in front of its head, similar to those of a cow or a bull.',
		keyword: 'fish',
		horns: 2,
	},
];

function Main() {
	return (
		<div className="main">
			<h1>Horned Beasts</h1>
			<div className="beastDisplay">
				{beastArray.map(
					({ title, description, image_url, _id, keyword, horns }) => (
						<HornedBeast
							title={title}
							imageURL={image_url}
							description={description}
						/>
					)
				)}
			</div>
		</div>
	);
}

export default Main;
