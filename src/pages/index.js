import React from "react";
import Layout from "../components/layout";
import HomeContent from "../content/homeContent";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Layout>
      <Box
        sx={{ p: isMobile ? 2 : 3, background: isMobile ? "#fff" : "#EDEDED" }}
      >
        <HomeContent isMobile={isMobile} isDesktop={isDesktop} />
      </Box>
    </Layout>
  );
}
