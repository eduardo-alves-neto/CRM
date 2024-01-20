import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";
import { Add } from "@mui/icons-material";
import { ModalProduto } from "../modalProdutos/modalProdutos";
import { useState } from "react";

interface IFerramentaDaListagemProps {
  textoDeBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentaDaListagem: React.FC<IFerramentaDaListagemProps> = ({
  textoDeBusca = "",
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  textoBotaoNovo = "Novo",
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
}) => {
  const theme = useTheme();
  const [modalAberto, setModalAberto] = useState(false);
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
      {mostrarInputBusca && (
        <TextField
          size="small"
          value={textoDeBusca}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
          placeholder="Pesquisar..."
        />
      )}

      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            variant="contained"
            color="primary"
            disableElevation
            endIcon={<Add />}
            onClick={()=> setModalAberto(true)}
          >
            {textoBotaoNovo}
          </Button>
        )}
         <ModalProduto
        open={modalAberto}
        onClose={() => setModalAberto(false)}
        onSave={(produto) => {
          // Lógica para salvar o novo produto
          console.log("Novo produto:", produto);
        }}
      />
      </Box>
    </Box>
  );
};
