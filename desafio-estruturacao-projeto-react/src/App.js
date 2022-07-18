import { Home } from './pages/Home/Home';
import { GlobalStyle } from './styles/global';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './hooks/useCart';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<Routes />
				<ToastContainer
					position='top-right'
					autoClose={3000}
					hideProgressBar={false}
					closeOnClick
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<GlobalStyle />
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
