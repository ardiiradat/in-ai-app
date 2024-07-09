import React from "react";
import { Box, Tabs, Tab, Typography, Grid, Stack } from "@mui/material";
import { IconTrendingUp, IconTrendingDown } from "@tabler/icons-react";
import { useTheme } from "@mui/material/styles";
import { usePortoState } from "../../state/usePortoState";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Stack>{children}</Stack>
        </Box>
      )}
    </div>
  );
}

const tabsData = [
  { label: "All", key: "all" },
  { label: "Realised gains", key: "realised" },
  { label: "Unrealised gains", key: "unrealised" },
];

const PortoPerform = ({ isMobile }) => {
  const theme = useTheme();
  const { usePortoPerformTabValue, usePortoData } = usePortoState();
  const [portoPerformTabValue, setPortoPerformTabValue] =
    usePortoPerformTabValue();
  const [portoData] = usePortoData();

  const handleChange = (event, newValue) => {
    setPortoPerformTabValue(newValue);
  };

  const renderData = (data) => (
    <Stack container spacing={2} sx={{ p: 1, mt: "-10px" }}>
      {data.map((item, index) => (
        <Grid
          item
          xs={12}
          key={index}
          sx={{
            py: 2,
            marginTop: "0 !important",
            borderBottom: "1px solid #d9d9d9",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: theme.palette.color.gray[60],
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              {item.period}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  color: theme.palette.color.gray[70],
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "20px",
                  pr: item.amount !== "0" ? "0" : "20px",
                }}
              >
                {item.amount !== "0" ? `+ $${item.amount}` : `$${item.amount}`}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  visibility: item.percentage === "0" ? "hidden" : "visible",
                  background: item.percentage.startsWith("-")
                    ? theme.palette.color.destructive[50]
                    : theme.palette.color.success[50],
                  color: theme.palette.color.gray[0],
                  ml: 1,
                  p: "4px 8px",
                  borderRadius: "50px",
                }}
              >
                {item.percentage.startsWith("-") ? (
                  <IconTrendingDown size={15} />
                ) : (
                  <IconTrendingUp size={15} />
                )}
                <Typography sx={{ ml: 0.5, fontSize: "12px" }}>
                  {item.percentage}%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Stack>
  );

  return (
    <>
      <Stack
        direction="column"
        mt={isMobile ? 0 : 2}
        sx={{
          background: isMobile ? "unset" : theme.palette.color.gray[0],
          borderRadius: "24px",
          width: isMobile ? "100%" : "30%",
          padding: isMobile ? 0 : "8px 24px",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.color.gray[60],
            fontSize: isMobile ? "18px" : "20px",
            fontWeight: "700",
            lineHeight: "24px",
            mt: 3,
            mb: 2,
            pl: 1,
          }}
        >
          Portfolio performance
        </Typography>
        <Box sx={{ width: "100%", p: 0.5 }}>
          <Tabs
            value={portoPerformTabValue}
            indicatorColor=""
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              ".MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
              },
              ".Mui-selected": {
                backgroundColor: "#e0f7fa",
                borderRadius: "25px",
              },
            }}
          >
            {tabsData.map((tab, index) => (
              <Tab
                sx={{
                  minWidth: "55px",
                  minHeight: "36px",
                  color: theme.palette.color.gray[60],
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "20px",
                  padding: "4px 12px",
                }}
                key={tab.key}
                label={tab.label}
              />
            ))}
          </Tabs>
          {tabsData.map((tab, index) => (
            <TabPanel key={tab.key} value={portoPerformTabValue} index={index}>
              {renderData(portoData)}
            </TabPanel>
          ))}
        </Box>
      </Stack>
    </>
  );
};

export default PortoPerform;
