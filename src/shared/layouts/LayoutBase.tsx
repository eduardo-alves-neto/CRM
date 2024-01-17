import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useDrawerContext } from "../contexts";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

interface ILayoutBase {
  children?: React.ReactNode;
  title: string;
}
export const LayoutBase: React.FC<ILayoutBase> = ({ children, title }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        height={theme.spacing(12)}
        display="flex"
        alignItems="center"
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>
              <MenuOpenIcon />
            </Icon>
          </IconButton>
        )}
        <Typography variant="h3">{title}</Typography>
      </Box>
      <Box>barra de ferramentas</Box>
      <Box>{children}</Box>
    </Box>
  );
};
