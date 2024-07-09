import React from "react";
import { Typography, Button, IconButton, Stack } from "@mui/material";
import { IconArrowRight, IconSearch, IconWand } from "@tabler/icons-react";
import { useTheme } from "@mui/material/styles";

const Title = ({ isMobile, isDesktop }) => {
  const theme = useTheme();

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      justifyContent="space-between"
      alignItems={isMobile ? "flex-start" : "center"}
      sx={{ my: 1 }}
      spacing={2}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: isMobile ? "100%" : "auto" }}
      >
        <Typography
          sx={{
            fontSize: isMobile ? "24px" : "32px",
            fontWeight: theme.palette.fontWeight.default[800],
            lineHeight: "32px",
            letterSpacing: "-1.2%",
          }}
        >
          Portfolio Dashboard
        </Typography>
        {isMobile && (
          <IconButton sx={{ px: 0 }}>
            <IconSearch />
          </IconButton>
        )}
      </Stack>
      <Stack
        direction="row"
        spacing={isMobile ? 2 : 4}
        sx={{
          width: isMobile ? "100%" : "auto",
          justifyContent: isMobile ? "space-between" : "flex-end",
        }}
      >
        {isDesktop && (
          <IconButton
            sx={{
              px: 0,
              "&:hover": {
                bgcolor: "unset",
              },
            }}
          >
            <IconSearch stroke={3} color="#000" />
          </IconButton>
        )}
        <Button
          variant="contained"
          sx={{
            bgcolor: theme.palette.color.gray[80],
            width: isMobile ? "100%" : "270px",
            p: "12px 20px",
            borderRadius: "50px",
            textTransform: "capitalize",
            fontWeight: theme.palette.fontWeight.default[700],
            fontSize: isMobile ? "16px" : "14px",
            "&:hover": {
              bgcolor: theme.palette.color.gray[70],
            },
          }}
        >
          <Stack gap={1} direction="row" alignItems="center">
            <IconWand width="20px" height="20px" />
            Ask AI assistant
            <IconArrowRight width="20px" height="20px" />
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Title;
