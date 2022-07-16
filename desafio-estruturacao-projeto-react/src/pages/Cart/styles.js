import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 52px;
`;

export const ContentEmpty = styled.div`
	background: #fff;
	border-radius: 4px;

	height: 629.18px;

	width: 734.41px;

	display: flex;
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
		border-bottom: 1.36px solid #3f3d56;
		padding: 0 120px;
	}

	.spiner {
		position: absolute;
		top: 45.5%;
		margin-left: 2.5%;
		background-color: transparent;
		width: fit-content;
		padding: 10px;
		border-radius: 100px;

		img {
			padding: 0;
			margin-bottom: 0;
			border-bottom: none;

			animation: loading 2s linear infinite;

			@keyframes loading {
				0% {
					transform: rotate(0);
				}
				100% {
					transform: rotate(360deg);
				}
			}
		}
	}
`;

export const Content = styled.div`
	background: #fff;
	border-radius: 4px;

	width: 734.41px;

	display: flex;
	flex-direction: column;

	padding: 13px 10px 12px 12px;
`;

export const ProductTable = styled.table`
	width: 100%;

	margin-bottom: 15px;
	border-bottom: 1px solid var(--subtitle);

	thead th {
		text-transform: uppercase;

		color: var(--subtitle);
		font-size: 14px;
		text-align: left;
	}

	tbody td {
		padding: 8px 36px 8px 0px;
	}

	img {
		height: 100px;
	}
	strong {
		font-size: 14px;
		color: #2f2e41;
		display: block;
	}
	span {
		display: block;
		margin-top: 4px;
		font-size: 14px;
		color: #2f2e41;
	}
	div {
		display: flex;
		align-items: center;
		justify-content: center;

		input {
			border: 1px solid #d9d9d9;
			border-radius: 4px;

			width: 47px;
			margin-inline: 6px;

			font-weight: 400;
			font-size: 14px;

			padding: 3px 4px;
		}
	}

	button {
		background: none;
		border: 0;
		svg {
			color: #7159c1;
			transition: color 0.2s;
		}
		&:hover {
			svg {
				color: ${darken(0.06, '#7159c1')};
			}
		}
		&:disabled {
			svg {
				color: ${lighten(0.25, '#7159c1')};
				cursor: not-allowed;
			}
		}
	}
`;

export const UpdateButtons = styled.button`
	background-color: transparent;
	width: fit-content;
	margin: 0;
	padding: 0;

	img {
		width: 18px;
		height: 18px;
	}
`;

export const RemoveButton = styled.button`
	background-color: transparent;
	width: fit-content;
	margin: 0;
	padding: 0;

	img {
		width: 14px;
		height: 18px;
	}
`;

export const FooterCart = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const FinishButton = styled.button`
	width: fit-content;

	padding: 11px 25px 11px 24px;

	font-size: 14px;
`;

export const Total = styled.div`
	display: flex;
	align-items: baseline;
  
  span{
    color: var(--subtitle);
    font-size: 14px;
    margin-right: 4px;
  }

  strong {
    font-size: 24px;
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
