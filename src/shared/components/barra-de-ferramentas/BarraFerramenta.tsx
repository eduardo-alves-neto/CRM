import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";
import { Add } from "@mui/icons-material";

export const BarraFerramenta: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      gap={1}
      alignItems="center"
      component={Paper}
    >
      <TextField size="small" placeholder="Pesquisar..." />
      <Box flex={1} display="flex" justifyContent="end">
        <Button
          variant="contained"
          color="primary"
          disableElevation
          endIcon={<Add/>}
        >
          Novo
        </Button>
      </Box>
    </Box>
  );
};
