import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/axios';

const CartContext = createContext({});

export function CartProvider({ children }) {
	const [cart, setCart] = useState(() => {
		const storagedCart = localStorage.getItem('@WeMovies:cart');

		if (storagedCart) {
			return JSON.parse(storagedCart);
		}
		return [];
	});

	const prevCartRef = useRef();

	useEffect(() => {
		prevCartRef.current = cart;
	});

	const cartPreviousValue = prevCartRef.current ?? cart;

	useEffect(() => {
		if (cartPreviousValue !== cart) {
			localStorage.setItem('@WeMovies:cart', JSON.stringify(cart));
		}
	}, [cart, cartPreviousValue]);
	
  const addProduct = async (productId) => {
		try {
			const updatedCart = [...cart];
			const productExists = updatedCart.find(
				(product) => product.id === productId
			);

			const currentAmount = productExists ? productExists.amount : 0;
			const amount = currentAmount + 1;

      // toast.error('Erro na adição do produto');

			if (productExists) {
				productExists.amount = amount;
			} else {
				const product = await api.get(`/products/${productId}`);

				const newProduct = {
					...product.data,
					amount: 1,
				};

				updatedCart.push(newProduct);
			}

			setCart(updatedCart);
		} catch {
			toast.error('Erro na adição do produto');
		}
	};

  const clearCart = () => {
    setCart([])
  }

  const removeProduct = (productId) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        (product) => product.id === productId
      );

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
      } else {
        throw Error();
      }
    } catch {
      toast.error("Erro na remoção do produto");
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }) => {
    try {
      if (amount <= 0) {
        return;
      }

      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        (product) => product.id === productId
      );

      if (productExists) {
        productExists.amount = amount;
        setCart(updatedCart);
      } else {
        throw Error();
      }
    } catch {
      toast.error("Erro na alteração de quantidade do produto");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
	const context = useContext(CartContext);

	return context;
}
