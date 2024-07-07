import React from "react";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconWand } from "@tabler/icons-react";

const AiSection = () => {
  const theme = useTheme();
  const labels = [
    "Listed shares balances per  month?",
    "Liquid  assets per account?",
    "What are current portfolio risks?",
  ];

  return (
    <>
      <Stack gap={1} direction="column" justifyContent="space-between" mt={2}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "22px",
            letterSpacing: "-0.007em",
            mb: 1,
            ml: 0.5,
          }}
        >
          AI suggested queries
        </Typography>
        {labels.map((label, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              width: "100%",
              border: "1px solid",
              background: theme.palette.color.gray[0],
              borderColor: theme.palette.color.gray[30],
              color: theme.palette.color.gray[60],
              boxShadow: "none",
              textTransform: "unset",
              justifyContent: "flex-start",
              borderRadius: "25px",
              padding: "10px 16px",
              fontSize: "14px",
              fontWeight: "700",
              "&:hover": {
                bgcolor: theme.palette.color.gray[30],
              },
            }}
          >
            <IconWand size={18} style={{ marginRight: "10px" }} />
            {label}
          </Button>
        ))}
      </Stack>
      <Divider
        sx={{
          border: "1px solid",
          borderColor: theme.palette.color.gray[30],
          my: 2,
        }}
      />
    </>
  );
};

export default AiSection;
