import React from "react";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconAdjustmentsHorizontal, IconCloudUp } from "@tabler/icons-react";

const BtnCustom = () => {
  const theme = useTheme();
  const labels = [
    {
      label: "Customise",
      icon: (
        <IconAdjustmentsHorizontal
          size={18}
          style={{ color: theme.palette.color.gray[60] }}
        />
      ),
    },
    {
      label: "Add Widget",
      icon: (
        <IconCloudUp
          size={18}
          style={{ color: theme.palette.color.gray[60] }}
        />
      ),
    },
  ];

  return (
    <>
      <Stack
        gap={1}
        direction="row"
        justifyContent="space-between"
        mt={2}
        mb={2}
        px={3.5}
        py={0.5}
      >
        {labels.map((tab, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              width: "50%",
              border: "1px solid",
              background: theme.palette.color.gray[0],
              borderColor: theme.palette.color.gray[30],
              color: theme.palette.color.gray[60],
              boxShadow: "none",
              textTransform: "unset",
              borderRadius: "25px",
              padding: "10px 16px",
              "&:hover": {
                bgcolor: theme.palette.color.gray[30],
              },
            }}
          >
            {tab.icon}
            <Typography sx={{ pl: 1, fontSize: "14px", fontWeight: "700" }}>
              {tab.label}
            </Typography>
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default BtnCustom;
