import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import { useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IListItemLink {
  children?: React.ReactNode;
  label: string;
  icon: string;
  to: string;
  onClick: (() => void) | undefined;
}
interface IMenuDrawerProps {
  children: React.ReactNode;
}

const ListItemLink: React.FC<IListItemLink> = ({
  to,
  icon,
  label,
  onClick,
}) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({path:resolvedPath.pathname, end: false})

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };
  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuDrawer: React.FC<IMenuDrawerProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(32)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(26)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ width: theme.spacing(12), height: theme.spacing(12) }}
              alt="Logo"
              src=""
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemLink
                icon="Home"
                label="Pagina Inicial"
                to="/pagina-inicial"
                onClick={smDown ? toggleDrawerOpen : undefined}
              />
              <ListItemLink
                icon="Home"
                label="TIK TOK"
                to="/tik-tok"
                onClick={smDown ? toggleDrawerOpen : undefined}
              />
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(33)}>
        {children}
      </Box>
    </>
  );
};
