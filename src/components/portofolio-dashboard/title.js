import React from "react";
import {
  Typography,
  Button,
  TextField,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import { IconArrowRight, IconSearch, IconWand } from "@tabler/icons-react";
import { useTheme } from "@mui/material/styles";

const Title = () => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 1 }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: theme.palette.fontWeight.default[800],
            lineHeight: "32px",
            letterSpacing: "-1.2%",
          }}
        >
          Portfolio Dashboard
        </Typography>
        <IconButton sx={{ px: 0 }}>
          <IconSearch />
        </IconButton>
      </Stack>
      <Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: theme.palette.color.gray[80],
            width: "100%",
            p: "12px 20px",
            borderRadius: "50px",
            textTransform: "capitalize",
            fontWeight: theme.palette.fontWeight.default[700],
            fontSize: "16px",
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
      </Box>
    </>
  );
};

export default Title;
