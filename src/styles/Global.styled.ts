import {createGlobalStyle} from "styled-components";
import {theme} from "src/styles/Theme.tsx";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //background: url("https://img.freepik.com/free-vector/geometric-pattern-with-lines-dots-3d-effect_1319-93.jpg?w=1380&t=st=1698759173~exp=1698759773~hmac=09957926479d615ee0c0f8856f47a0c4e4bfa8a56651a0ed652e6926b5a5e8ec") center repeat !important;
    background: url("https://img.freepik.com/free-vector/hand-drawn-doodle-icons-set_1308-90706.jpg?w=1380&t=st=1698763328~exp=1698763928~hmac=50bb66bc54ce3c8a2718a8ef194f981166e837fa2804e6f3ab42f32e426bb713") center repeat !important;
    color: ${theme.color.font};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }


  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  button {
    cursor: pointer;
    background-color: unset;
    border: none;
  }
`