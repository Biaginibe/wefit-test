import { formatPrice } from '../../util/format';
import { Button, Container, Content } from './styles';
import cartImg from '../../assets/images/buttonCart.svg';
import { useCart } from '../../hooks/useCart';

export function Card({ data, index }) {
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[product.id] = product.amount;

    return newSumAmount;
  }, {});

  function handleAddProduct(id) {
    addProduct(id);
  }

	return (
		<Container marginRight={index !== 2 && index !== 5 ? '11.41px' : '0'}>
			<Content>
				<img src={data.image} alt={data.title} title={data.title} />
				<h5>{data.title}</h5>

				<span>{formatPrice(data.price)}</span>
				<Button onClick={() => handleAddProduct(data.id)}>
					<div className='block'>
						<img src={cartImg} alt='adicionar' title='adicionar' />
						<span>{cartItemsAmount[data.id] || 0}</span>{' '}
					</div>
          adicionar ao carrinho
				</Button>
			</Content>
		</Container>
	);
}
