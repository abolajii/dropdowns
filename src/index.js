import { render } from 'react-dom';
import styled from 'styled-components';

import App from './App';

const GlobalStyles = styled.div`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}
`;

render(
	<>
		<GlobalStyles />
		<App />
	</>,
	document.getElementById('root')
);
