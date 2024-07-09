import React from "react";
import { Typography, Box, Stack, Tab, Tabs, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  IconChevronRight,
  IconDotsVertical,
  IconTrendingUp,
  IconWorld,
} from "@tabler/icons-react";
import Image from "next/image";
import BtnEntity from "./btnEntity";
import PortoPerform from "./portoPerform";
import { usePortoState } from "../../state/usePortoState";

const tabLabels = [
  { label: "All", icon: <IconWorld /> },
  {
    label: "Australia",
    icon: <Image src="/assets/au.png" alt="Australia" width="20" height="20" />,
  },
  {
    label: "USA",
    icon: <Image src="/assets/us.png" alt="USA" width="20" height="20" />,
  },
  {
    label: "Europe",
    icon: <Image src="/assets/eu.png" alt="Europe" width="20" height="20" />,
  },
];

const NetAssets = ({ isMobile, isDesktop }) => {
  const theme = useTheme();
  const { useNetAssetsTabValue, useNetAssetsData } = usePortoState();
  const [netAssetsTabValue, setNetAssetsTabValue] = useNetAssetsTabValue();
  const [netAssetsData] = useNetAssetsData();

  const handleTabChange = (event, newValue) => {
    setNetAssetsTabValue(newValue);
  };

  const { netAssets, grossAssets, liabilities, change } = netAssetsData;

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Tabs
          sx={{
            my: 0,
            background: isMobile ? "transparent" : "#fff",
            padding: isMobile ? "0px" : "8px",
            borderRadius: "50px",
          }}
          indicatorColor=""
          value={netAssetsTabValue}
          onChange={handleTabChange}
        >
          {tabLabels.map((tab, index) => (
            <Tab
              key={tab.label}
              label={
                <Stack
                  sx={{
                    textTransform: "capitalize",
                    color:
                      netAssetsTabValue === index
                        ? theme.palette.color.brand[60]
                        : "inherit",
                  }}
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  {tab.icon}
                  <Typography
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {tab.label}
                  </Typography>
                </Stack>
              }
              sx={{
                p: "8px 12px",
                border: 1,
                borderRadius: "50px",
                borderColor:
                  netAssetsTabValue === index
                    ? theme.palette.color.brand[60]
                    : "transparent",
                color:
                  netAssetsTabValue === index
                    ? theme.palette.color.brand[60]
                    : "inherit",
              }}
            />
          ))}
        </Tabs>
        {isDesktop && <BtnEntity isMobile={isMobile} />}
      </Stack>
      <Stack direction={isMobile ? "column" : "row"}>
        <Box
          sx={{
            bgcolor: theme.palette.color.purple[70],
            color: theme.palette.color.gray[0],
            p: isMobile ? 3 : 2,
            borderRadius: "24px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: isMobile ? "100%" : "70%",
            mr: isMobile ? 0 : 2,
          }}
          mt={2}
        >
          <Box sx={{ width: isMobile ? "unset" : "60%", p: isMobile ? 0 : 5 }}>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: isMobile ? "16px" : "32px",
                  mb: isMobile ? 0 : 6,
                  lineHeight: "24px",
                }}
              >
                Net assets
              </Typography>
              <IconDotsVertical
                size={28}
                style={{
                  color: theme.palette.color.purple[30],
                  cursor: "pointer",
                }}
              />
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box sx={{ my: 1 }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: isMobile ? "30px" : "64px",
                    mb: isMobile ? 0 : 4,
                    lineHeight: "38px",
                  }}
                >
                  {netAssets}
                </Typography>
                <Stack sx={{ my: 1 }} gap={1} direction="row">
                  <Typography
                    sx={{
                      background: theme.palette.color.gray[0],
                      fontWeight: 600,
                      fontSize: "12px",
                      lineHeight: "16px",
                      p: "4px 8px",
                      borderRadius: "50px",
                      color: theme.palette.color.success[50],
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <IconTrendingUp size={16} style={{ marginRight: "4px" }} />{" "}
                    {change}
                  </Typography>
                  <Typography
                    sx={{
                      background: theme.palette.color.gray[0],
                      color: theme.palette.color.gray[60],
                      fontWeight: 600,
                      fontSize: "12px",
                      lineHeight: "16px",
                      p: "4px 8px",
                      borderRadius: "50px",
                    }}
                  >
                    last day
                  </Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  mr: isMobile ? 3 : 0,
                }}
              >
                <IconChevronRight
                  size={32}
                  style={{
                    color: theme.palette.color.gray[0],
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Stack>
          </Box>
          {isDesktop && (
            <Divider
              sx={{ my: 3, borderColor: "#FFF" }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
          )}
          <Box
            sx={{
              p: isMobile ? 0 : 5,
              alignSelf: isMobile ? "unset" : "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: isMobile ? 300 : 400,
                fontSize: isMobile ? "16px" : "24px",
                lineHeight: "32px",
                letterSpacing: isMobile ? "unset" : "-0.3px",
                mb: isMobile ? "unset" : 4,
              }}
            >
              Gross assets:{" "}
              <span style={{ fontWeight: 700 }}>{grossAssets}</span>
            </Typography>
            <Typography
              sx={{
                fontWeight: isMobile ? 300 : 400,
                fontSize: isMobile ? "16px" : "24px",
                lineHeight: "32px",
                letterSpacing: isMobile ? "unset" : "-0.3px",
              }}
            >
              Liabilities:{" "}
              <span
                style={{
                  fontWeight: 600,
                  color: theme.palette.color.destructive[30],
                }}
              >
                {liabilities}
              </span>
            </Typography>
          </Box>
        </Box>
        {isDesktop && <PortoPerform isMobile={isMobile} />}
      </Stack>
    </>
  );
};

export default NetAssets;
