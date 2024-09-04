import { Container } from "@mui/material";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {children}
    </Container>
  );
};

export default Layout;
