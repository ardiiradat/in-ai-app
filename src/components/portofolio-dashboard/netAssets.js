import React, { useState } from "react";
import { Typography, Box, Stack, Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  IconChevronRight,
  IconDotsVertical,
  IconTrendingUp,
  IconWorld,
} from "@tabler/icons-react";
import Image from "next/image";

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

const dummyData = {
  all: {
    netAssets: "$74,769,618",
    grossAssets: "$78,789,618",
    liabilities: "$2,020,000",
    change: "+0.1%",
  },
  australia: {
    netAssets: "$24,769,618",
    grossAssets: "$28,789,618",
    liabilities: "$4,020,000",
    change: "+0.3%",
  },
  usa: {
    netAssets: "$34,769,618",
    grossAssets: "$38,789,618",
    liabilities: "$1,020,000",
    change: "-0.2%",
  },
  europe: {
    netAssets: "$14,769,618",
    grossAssets: "$18,789,618",
    liabilities: "$8,020,000",
    change: "+0.5%",
  },
};

const NetAssets = () => {
  const theme = useTheme();

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const getCurrentData = () => {
    switch (tabValue) {
      case 1:
        return dummyData.australia;
      case 2:
        return dummyData.usa;
      case 3:
        return dummyData.europe;
      default:
        return dummyData.all;
    }
  };

  const { netAssets, grossAssets, liabilities, change } = getCurrentData();

  return (
    <>
      <Tabs
        sx={{ my: 3 }}
        indicatorColor=""
        value={tabValue}
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
                    tabValue === index
                      ? theme.palette.color.brand[60]
                      : "inherit",
                }}
                direction="row"
                alignItems="center"
                spacing={1}
              >
                {tab.icon}
                <Typography>{tab.label}</Typography>
              </Stack>
            }
            sx={{
              p: "8px 12px",
              border: 1,
              borderRadius: "50px",
              borderColor:
                tabValue === index
                  ? theme.palette.color.brand[60]
                  : "transparent",
              color:
                tabValue === index ? theme.palette.color.brand[60] : "inherit",
            }}
          />
        ))}
      </Tabs>
      <Box
        sx={{
          bgcolor: theme.palette.color.purple[70],
          color: theme.palette.color.gray[0],
          p: "16px",
          borderRadius: "24px",
        }}
        mt={2}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Net assets
          </Typography>
          <IconDotsVertical
            size={28}
            style={{
              color: theme.palette.color.purple[30],
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
                fontSize: "30px",
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
              mr: 3,
            }}
          >
            <IconChevronRight
              size={32}
              style={{
                color: theme.palette.color.gray[0],
              }}
            />
          </Box>
        </Stack>
        <Typography
          sx={{
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "32px",
          }}
        >
          Gross assets: <span style={{ fontWeight: 700 }}>{grossAssets}</span>
        </Typography>
        <Typography
          sx={{
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "32px",
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
    </>
  );
};

export default NetAssets;
