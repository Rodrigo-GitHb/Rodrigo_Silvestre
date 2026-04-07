import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{ isDark: boolean }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: ${props => props.isDark ? '#0a0a0a' : '#ffffff'};
    color: ${props => props.isDark ? '#ffffff' : '#333333'};
    transition: all 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  section {
    padding: 80px 0;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    display: flex;
  }
`

export default GlobalStyle