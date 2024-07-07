import { Stack, IconButton, Typography, Avatar } from "@mui/material";
import { IconMenu2 } from "@tabler/icons-react";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const theme = useTheme();
  return (
    <header>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2 }}
      >
        <IconButton sx={{ px: 0 }}>
          <Avatar
            sx={{ p: 0 }}
            alt="Profile"
            src="https://placehold.co/50x50"
          />
        </IconButton>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "800",
            lineHeight: "28px",
            letterSpacing: "-1%",
            color: theme.palette.color.brand[60],
          }}
        >
          In<span style={{ color: theme.palette.color.gray[60] }}>AI</span>
        </Typography>
        <IconButton sx={{ p: 0 }}>
          <IconMenu2 />
        </IconButton>
      </Stack>
    </header>
  );
};

export default Header;
