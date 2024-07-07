import React from "react";
import { Button, Box, Stack } from "@mui/material";
import NetAssets from "./netAssets";
import PortoPerform from "./portoPerform";
import { useTheme } from "@mui/material/styles";
import { IconCoins, IconBuildingCommunity } from "@tabler/icons-react";
import BtnEntity from "./btnEntity";
import GrossIncome from "./grossIncome";
import AiSection from "./aiSection";
import BtnCustom from "./btnCustom";

const TotalAssets = () => {
  const theme = useTheme();

  return (
    <>
      <Box mt={2}>
        <NetAssets />
        <BtnEntity />
        <PortoPerform />
        <GrossIncome />
        <AiSection />
        <BtnCustom />
      </Box>
    </>
  );
};

export default TotalAssets;
