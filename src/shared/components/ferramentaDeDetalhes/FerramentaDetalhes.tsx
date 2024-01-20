import { Add } from "@mui/icons-material";
import { Box, Button, Paper, useTheme } from "@mui/material";

export const FerramentaDeDetalhes: React.FC = () => {
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
      <Button
        variant="contained"
        color="primary"
        disableElevation
        startIcon={<Add />}
      >
        Salvar
      </Button>

      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Add />}
      >
        Editar
      </Button>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Add />}
      >
        Apagar
      </Button>
    </Box>
  );
};
