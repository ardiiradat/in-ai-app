import React, { useState } from "react";
import { Typography, Box, Stack, Tab, Tabs, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  IconChevronRight,
  IconDotsVertical,
  IconTrendingUp,
  IconWorld,
} from "@tabler/icons-react";

const tabLabels = [
  { label: "Day" },
  {
    label: "Month",
  },
  {
    label: "Quarter",
  },
  {
    label: "FY 2024",
  },
];

const dummyData = {
  all: {
    grossAssets: "$14,769,618",
    expenses: "$9,618",
    income: "$2,020,000",
    change: "+0.1%",
  },
  australia: {
    grossAssets: "$24,769,618",
    expenses: "$29,618",
    income: "$4,020,000",
    change: "+0.3%",
  },
  usa: {
    grossAssets: "$34,769,618",
    expenses: "$19,618",
    income: "$5,020,000",
    change: "-0.2%",
  },
  europe: {
    grossAssets: "$54,769,618",
    expenses: "$789,618",
    income: "$18,020,000",
    change: "+2.5%",
  },
};

const GrossIncome = () => {
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

  const { grossAssets, expenses, income, change } = getCurrentData();

  return (
    <>
      <Box
        sx={{
          border: "1px solid",
          borderColor: theme.palette.color.gray[30],
          color: theme.palette.color.gray[60],
          p: "16px",
          borderRadius: "24px",
        }}
        mt={2}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "24px",
            }}
          >
            Gross Income
          </Typography>
          <IconDotsVertical
            size={28}
            style={{
              color: theme.palette.color.gray[30],
            }}
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ mt: 1 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "38px",
                color: "#000",
                letterSpacing: "-1.4px",
              }}
            >
              {grossAssets}
            </Typography>
            <Stack sx={{ mb: 1 }} gap={1} direction="row">
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
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
                <span
                  style={{
                    color: theme.palette.color.gray[60],
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "16px",
                    padding: "4px 8px",
                    borderRadius: "50px",
                  }}
                >
                  vs last year
                </span>
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              mr: 1,
            }}
          >
            <IconButton
              sx={{
                background: theme.palette.color.brand[5],
                borderRadius: "50%",
                padding: 1,
              }}
            >
              <IconChevronRight
                size={32}
                style={{
                  color: theme.palette.color.gray[60],
                }}
              />
            </IconButton>
          </Box>
        </Stack>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "32px",
          }}
        >
          Less expenses:{" "}
          <span
            style={{
              fontWeight: 900,
              color: theme.palette.color.destructive[90],
            }}
          >
            -{expenses}
          </span>
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "32px",
          }}
        >
          Net income:{" "}
          <span
            style={{
              fontWeight: 900,
              color: "#000",
            }}
          >
            {income}
          </span>
        </Typography>
        <Box
          sx={{
            background: theme.palette.color.gray[10],
            padding: "4px 8px",
            borderRadius: "50px",
            mt: 1,
          }}
        >
          <Tabs
            sx={{ my: 0.5 }}
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
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "-0.6px",
                      }}
                    >
                      {tab.label}
                    </Typography>
                  </Stack>
                }
                sx={{
                  p: "4px 12px",
                  border: 1,
                  borderRadius: "50px",
                  border: "transparent",
                  background:
                    tabValue === index
                      ? theme.palette.color.gray[0]
                      : "transparent",
                  color:
                    tabValue === index
                      ? theme.palette.color.brand[60]
                      : "inherit",
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default GrossIncome;
