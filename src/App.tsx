import { RouterProvider } from "react-router-dom";

import { router } from "./routes/router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyles } from "./styles/globalStyles";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
