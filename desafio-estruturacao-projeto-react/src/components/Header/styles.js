import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;

	margin-top: 16px;
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 734px;
	height: 72px;

	padding: 20px 16px;

	h2 {
		color: #fff;
		font-size: 20px;
	}

	h3 {
		color: #fff;
		font-size: 14px;
		font-weight: 600;
	}

	h5 {
		color: var(--subtitle);
		font-size: 12px;
		font-weight: 600;
	}
`;
export const Logo = styled(Link)`
	text-decoration: none;
`;

export const MyCart = styled(Link)`
	display: flex;
	flex-direction: row;

	text-decoration: none;

	img {
		margin-left: 9.33px;
		cursor: pointer;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
`;
