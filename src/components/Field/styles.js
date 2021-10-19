import styled from 'styled-components/macro';

export const Container = styled.div`
	font-family: 'Roboto', sans-serif;
`;

export const Inner = styled.div`
	max-width: 1000px;
	margin: auto;
	background: grey;
	height: 500px;
	border-radius: 10px;
	margin-top: 60px;
	padding: 10px;
`;

export const FirstContainer = styled.div`
	position: relative;

	height: 300px;
	width: 300px;

	border-right: 2px solid white;
`;

export const FirstDropdown = styled.div`
	padding: 10px;

	cursor: pointer;
	color: white;

	&:hover {
		background-color: white;
		color: grey;
	}
`;

export const SecondContainer = styled.div`
	position: absolute;
	left: 304px;
	top: 0;
	height: 300px;
	width: 300px;

	border-right: 2px solid white;
`;

export const SecondDropdown = styled.div`
	padding: 10px;

	cursor: pointer;
	color: white;

	&:hover {
		background-color: white;
		color: grey;
	}
`;

export const ThirdContainer = styled.div`
	position: absolute;
	top: 0;
	height: 300px;
	width: 300px;
	left: 304px;

	border-right: 2px solid white;
`;

export const ThirdDropdown = styled.div`
	padding: 10px;

	cursor: pointer;
	color: white;
	&:hover {
		background-color: white;
		color: grey;
	}
`;
