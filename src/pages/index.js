import React from "react";
import Layout from "../components/layout";
import HomeContent from "../content/homeContent";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Layout title="Portfolio Dashboard">
      <Box sx={{ px: 2 }}>
        <HomeContent />
      </Box>
    </Layout>
  );
}
