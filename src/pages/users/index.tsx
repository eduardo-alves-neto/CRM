import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { UserTypeServices } from "./services";
import { enqueueSnackbar } from "notistack";
import { userTypeResponse } from "./services/types";
import { TextField, useTheme } from "@mui/material";
import { FerramentaDaListagem } from "../../shared/components/FerramentaDaListagem/FerramentaDaListagem";
import { LayoutBase } from "../../shared/layouts/LayoutBase";
import { SkeletonLoading } from "./Skeleton";

export default function Users() {
  const [users, setUsers] = useState<userTypeResponse[]>([]);
  const theme = useTheme();

  const { isLoading, refetch } = useQuery({
    queryKey: ["/"],
    queryFn: async () => {
      try {
        const data = await UserTypeServices.get();

        setUsers(data);
        return data;
      } catch (error) {
        enqueueSnackbar("Unable to obtain data", { variant: "error" });
        return [];
      }
    },
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Nome",
      width: 150,
    },
    {
      field: "phone",
      headerName: "Telefone",
      width: 150,
    },
    {
      field: "address",
      headerName: "Endereço",
      width: 150,
    },
  ];

  return (
    <>
      <LayoutBase
        title={"Clientes"}
        barraDeFerramenta={
          <FerramentaDaListagem mostrarInputBusca rota="/users/create" />
        }
      >
        <Box
          height={theme.spacing(70)}
          marginX={1}
          padding={1}
          paddingX={2}
          flex={1}
        >
          {isLoading ? (
            <SkeletonLoading />
          ) : (
            <DataGrid
              rows={users}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          )}
        </Box>
      </LayoutBase>
    </>
  );
}
