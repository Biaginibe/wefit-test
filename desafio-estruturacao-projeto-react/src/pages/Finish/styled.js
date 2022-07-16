import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 52px;
`;

export const Content = styled.div`
	background: #fff;
	border-radius: 4px;

	height: 629.18px;

	width: 734.41px;

	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-direction: column;

	padding: 62px 15px;
	position: relative;

	h3 {
		font-size: 20px;
		margin-bottom: 49px;
	}

	img {
		margin-bottom: 33.2px;
	}
`;

export const LinkButton = styled(Link)`
	border: none;
	border-radius: 4px;
	background: var(--blue);
	color: #fff;

	text-transform: uppercase;
	text-decoration: none;

	padding: 11px 58px;
`;
