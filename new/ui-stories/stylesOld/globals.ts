import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  h1 {
    text-decoration:underline;
  }
  h2 {
    color: orange;
  }
  `

// color: ${props => (props?.darkMode ? 'white' : 'black')};
