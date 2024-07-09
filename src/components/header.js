import { useState } from "react";
import {
  Stack,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const menuItems = ["Lorem", "Lipsum", "Dolor Sir"];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: isMobile ? 2 : 3 }}
      >
        {isDesktop && (
          <>
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
            <Stack direction="row" spacing={10}>
              {menuItems.map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "28px",
                    letterSpacing: "-1%",
                    color: theme.palette.color.gray[80],
                    cursor: "pointer",
                    "&:hover": {
                      color: theme.palette.color.brand[60],
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
            <IconButton sx={{ px: 0 }}>
              <Avatar
                sx={{ p: 0 }}
                alt="Profile"
                src="https://placehold.co/50x50"
              />
            </IconButton>
          </>
        )}
        {isMobile && (
          <>
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
            <IconButton sx={{ p: 0 }} onClick={handleMenuClick}>
              {anchorEl ? <IconX /> : <IconMenu2 />}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={handleMenuClose}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Stack>
    </header>
  );
};

export default Header;
