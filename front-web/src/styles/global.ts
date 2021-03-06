import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
  --primary-color: #da5c5c;
  --primary-hover-color: #a74b4b;
  --dark-color: #263238;
  --secondary-color: #9E9E9E;
  --light-color: #F5F5F5;
}

html, body {
  margin: 0;
  padding:0;
}

body {
  font-family: 'Open Sans', sans-serif;
}

a {
  text-decoration: none;
}
`;
