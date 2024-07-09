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

const TotalAssets = ({ isMobile, isDesktop }) => {
  const theme = useTheme();

  return (
    <>
      <Box mt={2}>
        <NetAssets isMobile={isMobile} isDesktop={isDesktop} />
        {isMobile && <BtnEntity isMobile={isMobile} />}
        {isMobile && <PortoPerform isMobile={isMobile} />}
        <GrossIncome isMobile={isMobile} isDesktop={isDesktop} />
        <AiSection isMobile={isMobile} isDesktop={isDesktop} />
        <BtnCustom isMobile={isMobile} />
      </Box>
    </>
  );
};

export default TotalAssets;
