import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import BeastModal from './Components/BeastModal';

function App() {
	// Function for Dark/Light Mode

	const [theme, setTheme] = useState('');

	function handleMode() {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	}

	/* 	useEffect(() => {
		localStorage.setItem('userTheme', JSON.stringify(theme));

		const userTheme = JSON.parse(localStorage.getItem('userTheme'));

		if (userTheme) {
			setTheme(userTheme);
		}
	});
 */
	// Function for Modal Pop-Up

	const [modalState, setModalState] = useState(false);
	const [modalInformation, setModalInformation] = useState({});

	function modalHandler(beast) {
		setModalState(!modalState);
		setModalInformation(beast);
	}

	// Function for Modal Information

	// Return

	return (
		<div className="App">
			<Header
				handleMode={handleMode}
				theme={theme}
			/>
			{modalState && (
				<BeastModal
					modalHandler={modalHandler}
					theme={theme}
					modalInformation={modalInformation}
				/>
			)}
			<Main
				theme={theme}
				modalHandler={modalHandler}
			/>

			<Footer theme={theme} />
		</div>
	);
}

export default App;
