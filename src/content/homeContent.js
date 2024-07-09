import React from "react";
import Title from "../components/portofolio-dashboard/title";
import TotalAssets from "../components/portofolio-dashboard/totalAssets";

const HomeContent = ({ isMobile, isDesktop }) => {
  return (
    <>
      <Title isMobile={isMobile} isDesktop={isDesktop} />
      <TotalAssets isMobile={isMobile} isDesktop={isDesktop} />
    </>
  );
};

export default HomeContent;
