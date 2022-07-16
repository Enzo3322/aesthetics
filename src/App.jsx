import 'animate.css';
import { Navbar } from './components/Navbar';
import { Hero } from './pages/Hero';
import { Design } from './pages/Design';
import { Cilios } from './pages/Cilios';
import { Contact } from './pages/Contact';
function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Design />
			<Cilios />
			<Contact />
		</>
	);
}

export default App;
