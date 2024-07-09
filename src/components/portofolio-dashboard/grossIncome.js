import React from "react";
import {
  Typography,
  Box,
  Stack,
  Tab,
  Tabs,
  IconButton,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  IconChevronRight,
  IconDotsVertical,
  IconTrendingUp,
} from "@tabler/icons-react";
import { usePortoState } from "../../state/usePortoState";

const tabLabels = [
  { label: "Day" },
  { label: "Month" },
  { label: "Quarter" },
  { label: "FY 2024" },
];

const TabGrossIncome = ({ tabValue, handleTabChange, theme, isMobile }) => (
  <Box
    sx={{
      background: theme.palette.color.gray[10],
      padding: "4px 8px",
      borderRadius: isMobile ? "50px" : "20px",
      mt: isMobile ? 1 : 0,
    }}
  >
    <Tabs
      indicatorColor=""
      sx={{ my: 0.5 }}
      value={tabValue}
      onChange={handleTabChange}
      orientation={isMobile ? "horizontal" : "vertical"}
    >
      {tabLabels.map((tab, index) => (
        <Tab
          key={tab.label}
          indicatorColor=""
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
                  fontSize: isMobile ? "14px" : "18px",
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
            border: "transparent",
            borderRadius: isMobile ? "50px" : "15px",
            background:
              tabValue === index ? theme.palette.color.gray[0] : "transparent",
            color:
              tabValue === index ? theme.palette.color.brand[60] : "inherit",
          }}
        />
      ))}
    </Tabs>
  </Box>
);

const GrossIncome = ({ isMobile, isDesktop }) => {
  const theme = useTheme();
  const { useGrossIncomeTabValue, useGrossIncomeData } = usePortoState();
  const [grossIncomeTabValue, setGrossIncomeTabValue] =
    useGrossIncomeTabValue();
  const [grossIncomeData] = useGrossIncomeData();

  const handleTabChange = (event, newValue) => {
    setGrossIncomeTabValue(newValue);
  };

  const { grossAssets, expenses, income, change } = grossIncomeData;

  return (
    <>
      <Stack
        direction={isMobile ? "column" : "row"}
        sx={{
          background: isMobile ? "transparent" : theme.palette.color.gray[0],
          border: isMobile ? "1px solid" : "0",
          borderColor: theme.palette.color.gray[30],
          color: theme.palette.color.gray[60],
          p: "16px",
          borderRadius: "24px",
          alignItems: isMobile ? "unset" : "center",
        }}
        mt={2}
      >
        {isDesktop && (
          <>
            <Box sx={{ width: isMobile ? "unset" : "10%" }}>
              <TabGrossIncome
                tabValue={grossIncomeTabValue}
                handleTabChange={handleTabChange}
                theme={theme}
                isMobile={isMobile}
              />
            </Box>
            <Divider
              sx={{ mx: 3, borderColor: theme.palette.color.gray[50] }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
          </>
        )}
        <Box
          sx={{ width: isMobile ? "unset" : "50%", padding: isMobile ? 0 : 5 }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: isMobile ? "18px" : "32px",
                lineHeight: "24px",
              }}
            >
              Gross Income
            </Typography>
            <IconDotsVertical
              size={28}
              style={{
                color: theme.palette.color.gray[30],
                cursor: "pointer",
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
                  fontWeight: isMobile ? 700 : 600,
                  fontSize: isMobile ? "36px" : "64px",
                  lineHeight: "38px",
                  color: "#000",
                  letterSpacing: "-1.4px",
                  mt: isMobile ? 0 : 4,
                }}
              >
                {grossAssets}
              </Typography>
              <Stack
                sx={{ mb: 1, mt: isMobile ? 0 : 3 }}
                gap={1}
                direction="row"
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: isMobile ? "14px" : "18px",
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
                      fontSize: isMobile ? "14px" : "18px",
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
        </Box>
        {isDesktop && (
          <Divider
            sx={{ mx: 3, borderColor: theme.palette.color.gray[50] }}
            orientation="vertical"
            variant="middle"
            flexItem
          />
        )}
        <Box sx={{ p: isMobile ? 0 : 6, width: isMobile ? "unset" : "40%" }}>
          <Typography
            sx={{
              fontWeight: isMobile ? 300 : 400,
              fontSize: isMobile ? "16px" : "24px",
              lineHeight: "32px",
              letterSpacing: isMobile ? "unset" : "-0.3px",
              mb: isMobile ? "unset" : 4,
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
              fontWeight: isMobile ? 300 : 400,
              fontSize: isMobile ? "16px" : "24px",
              lineHeight: "32px",
              letterSpacing: isMobile ? "unset" : "-0.3px",
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
        </Box>
        {isMobile && (
          <TabGrossIncome
            tabValue={grossIncomeTabValue}
            handleTabChange={handleTabChange}
            theme={theme}
            isMobile={isMobile}
          />
        )}
      </Stack>
    </>
  );
};

export default GrossIncome;
