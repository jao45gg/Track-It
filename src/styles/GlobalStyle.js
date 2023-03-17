import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		font-family: 'Lexend Deca', sans-serif;

		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

export default GlobalStyle;