import { Column, Container, Content, Logo, MyCart } from './styles';
import cartImg from '../../assets/images/cart.svg';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';

export function Header() {
	const { cart } = useCart();

	const cartSize =
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.amount;
    }, 0)
  
  
	// const cartSize = cart.length;

	return (
		<Container>
			<Content>
        <Logo to="/">
				  <h2>WeMovies</h2>
        </Logo>
				<MyCart to="/cart">
					<Column>
						<h3>Meu Carrinho</h3>
						<h5>{cartSize} itens</h5>
					</Column>
					<img
						src={cartImg}
						alt='carrinho'
					/>
				</MyCart>
			</Content>
		</Container>
	);
}
