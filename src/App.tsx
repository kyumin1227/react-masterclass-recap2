import { Outlet } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { darkTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Noto Sans", serif;
    color: black;
    background: linear-gradient(135deg, #e09, #d0e);
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Outlet />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
};

export default App;
