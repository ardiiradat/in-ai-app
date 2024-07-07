import React from "react";
import { Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconCoins, IconBuildingCommunity } from "@tabler/icons-react";

const BtnEntity = () => {
  const theme = useTheme();

  return (
    <>
      <Stack gap={1} direction="row" justifyContent="space-between" mt={2}>
        <Button
          variant="contained"
          sx={{
            width: "50%",
            background: theme.palette.color.brand[60],
            textTransform: "unset",
            borderRadius: "25px",
            padding: "10px 16px",
            fontSize: "14px",
            fontWeight: "700",
            "&:hover": {
              bgcolor: theme.palette.color.brand[50],
            },
          }}
        >
          <IconCoins size={18} style={{ marginRight: 5 }} />
          Add new asset
        </Button>
        <Button
          variant="outlined"
          sx={{
            width: "50%",
            textTransform: "unset",
            borderRadius: "25px",
            padding: "10px 16px",
            fontSize: "14px",
            fontWeight: "700",
            color: theme.palette.color.gray[60],
            borderColor: theme.palette.color.gray[60],
            "&:hover": {
              borderColor: theme.palette.color.brand[60],
              color: theme.palette.color.brand[60],
            },
          }}
        >
          <IconBuildingCommunity size={18} style={{ marginRight: 5 }} />
          Add new entity
        </Button>
      </Stack>
    </>
  );
};

export default BtnEntity;
