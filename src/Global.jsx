import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    background-color: #F8F9FF;
    overflow-x: hidden;
  }
  img {
    max-width: 100%;
}

button {
  cursor: pointer;
}
`

export default GlobalStyles