import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import BeastModal from './Components/BeastModal';

function App() {
	// Function for Dark/Light Mode

	const [theme, setTheme] = useState('lightMode');

	function handleMode() {
		if (theme === 'darkMode') {
			setTheme('lightMode');
			console.log(theme);
		} else {
			setTheme('darkMode');
			console.log(theme);
		}
	}

	// Function for Modal Pop-Up

	const [modalState, setModalState] = useState(false);

	function modalHandler() {
		setModalState(!modalState);
		console.log('Is this working?');
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
					modalInformationHandler={modalInformationHandler}
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
