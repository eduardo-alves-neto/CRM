import React, { useState } from "react";
import { Button, Dialog, DialogTitle, TextField } from "@mui/material";

interface ModalProdutoProps {
  open: boolean;
  onClose: () => void;
  onSave: (produto: { nome: string }) => void;
}

export const ModalProduto: React.FC<ModalProdutoProps> = ({
  open,
  onClose,
  onSave,
}) => {
  const [nomeProduto, setNomeProduto] = useState("");

  const handleSave = () => {
    onSave({ nome: nomeProduto });
    setNomeProduto(""); // Limpar o campo de nome após salvar
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Criar Novo Produto</DialogTitle>
      <TextField
        label="Nome do Produto"
        value={nomeProduto}
        onChange={(e) => setNomeProduto(e.target.value)}
      />
      {/* Adicione outros campos necessários para a criação do produto */}
      <Button onClick={onClose}>Cancelar</Button>
      <Button onClick={handleSave}>Salvar</Button>
    </Dialog>
  );
};
