import { Container } from "@mui/material";
import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        sx={{
          flexGrow: 1,
          paddingY: 2,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          margin: "auto",
          width: "fit-content",
          color: "white",
        }}
      >
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
