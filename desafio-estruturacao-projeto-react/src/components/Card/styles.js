import styled from 'styled-components';

export const Container = styled.div`
	background: var(--shape);

	border-radius: 4px;

	width: 229.59px;
	margin-bottom: 11.7px;

	margin-right: ${({ marginRight }) => (marginRight ? marginRight : '0')};
	padding: 9.96px 11.23px ;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	img {
		width: 147px;
		height: 188px;
		margin-bottom: 7px;
	}

	h5 {
		font-size: 12px;
		color: var(--darkGray);
		line-height: 16.34px;
		margin-bottom: 2px;
    height: 18px;
	}
  
	span {
    text-align: left;
		color: var(--darkGray);
		width: 100%;
		font-size: 10px;
		margin-bottom: 8px;
    line-height: 13.62px;
    height: 14px;
	}
  `;

export const Button = styled.button`
	display: flex;
	justify-content: space-between;
  align-items: center;

	padding: 7px 11px;

	width: 100%;

	font-size: 12px;

	.block {
    display: flex;
    align-items: center;
		
    img {
			width: 11.42px;
			height: 11.9px;
      margin-right: 5px;
      margin-bottom: 0;
		}

		span {
			color: #fff;
			font-weight: 400;
      line-height: 16.34px;
      margin-bottom: 0;
      height: 17px;
		}
	}
`;
