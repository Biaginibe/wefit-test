import { Header } from '../../components/Header/Header';
import { useCart } from '../../hooks/useCart';
import {
	LinkButton,
	Container,
	Content,
	ContentEmpty,
	HeaderContent,
	Products,
	ProductTable,
	RemoveButton,
	UpdateButtons,
	FinishButton,
	FooterCart,
  Total,
} from './styles';
import emptyImg from '../../assets/images/emptyCart.svg';
import refreshImg from '../../assets/images/refresh.svg';
import decrementImg from '../../assets/images/decrement.svg';
import incrementImg from '../../assets/images/increment.svg';
import removeImg from '../../assets/images/remove.svg';
import { formatPrice } from '../../util/format';
import { useHistory } from 'react-router-dom';

export function Cart() {
	const { cart, removeProduct, updateProductAmount, clearCart } = useCart();
  const history = useHistory();
	

	const cartSize = cart.length;

	const cartFormatted = cart.map((product) => ({
		...product,
		priceFormatted: formatPrice(product.price),
		subTotal: formatPrice(product.price * product.amount),
	}));

	const total = formatPrice(
		cart.reduce((sumTotal, product) => {
			return sumTotal + product.price * product.amount;
		}, 0)
	);

	function handleProductIncrement(product) {
		updateProductAmount({
			productId: product.id,
			amount: product.amount + 1,
		});
	}

	function handleProductDecrement(product) {
		updateProductAmount({
			productId: product.id,
			amount: product.amount - 1,
		});
	}

	function handleRemoveProduct(productId) {
		removeProduct(productId);
	}
  

  function handleClick() {
    clearCart();
    history.push("/purchase");
  }

	return (
		<>
			<Header />
			<Container>
				{cartSize > 0 ? (
					<Content>
						<ProductTable>
							<thead>
								<tr>
									<th aria-label='product image' />
									<th>PRODUTO</th>
									<th>QTD</th>
									<th>SUBTOTAL</th>
									<th aria-label='delete icon' />
								</tr>
							</thead>
							<tbody>
								{cartFormatted.map((product) => {
									return (
										<tr key={product.id}>
											<td>
												<img
													src={product.image}
													alt={product.title}
												/>
											</td>
											<td>
												<strong>{product.title}</strong>
												<span>
													{product.priceFormatted}
												</span>
											</td>
											<td>
												<div>
													<UpdateButtons
														type='button'
														disabled={
															product.amount <= 1
														}
														onClick={() =>
															handleProductDecrement(
																product
															)
														}
													>
														<img
															src={decrementImg}
															alt='diminuir'
														/>
													</UpdateButtons>
													<input
														type='text'
														readOnly
														value={product.amount}
													/>
													<UpdateButtons
														type='button'
														onClick={() =>
															handleProductIncrement(
																product
															)
														}
													>
														<img
															src={incrementImg}
															alt='aumentar'
														/>
													</UpdateButtons>
												</div>
											</td>
											<td>
												<strong>
													{product.subTotal}
												</strong>
											</td>
											<td>
												<RemoveButton
													type='button'
													onClick={() =>
														handleRemoveProduct(
															product.id
														)
													}
												>
													<img
														src={removeImg}
														alt='remover item'
													/>
												</RemoveButton>
											</td>
										</tr>
									);
								})}
							</tbody>
						</ProductTable>
						<FooterCart>
							<FinishButton onClick={() => handleClick()}>finalizar pedido</FinishButton>
              <Total>
                <span>TOTAL</span>
                <strong>{total}</strong>
              </Total>
						</FooterCart>
					</Content>
				) : (
					<ContentEmpty>
						<h3> Parece que não há nada por aqui :(</h3>
						<img src={emptyImg} />
						<div className='spiner'>
							<img src={refreshImg} />
						</div>
						<LinkButton to='/'>Voltar</LinkButton>
					</ContentEmpty>
				)}
			</Container>
		</>
	);
}
