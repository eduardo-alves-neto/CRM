import  { useState } from "react";
import {useQuery} from '@tanstack/react-query';
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { UserTypeServices } from "./services";
// import { ErrorResponse } from "react-router-dom";
import { enqueueSnackbar } from 'notistack';
import {userTypeResponse} from './services/types'

export default function Users() {
  const [users, setUsers] = useState<userTypeResponse[]>([]);
   
  const { isLoading, refetch } = useQuery({
    queryKey:['/'],
    queryFn: async () => {
      try {
        const data = await UserTypeServices.get();

        setUsers(data);
        console.log(data)
        return data;
      } catch (error) {
      enqueueSnackbar("Unable to obtain data", { variant: 'error' });
      }
    },
  });
// refetch();



  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "phone",
      headerName: "phone",
      width: 150,
    },
  ];
  console.log(users)
  return (
    <>
      <Box>
        <h1>Users</h1>
      </Box>
      <Box sx={{ height: 400, width: "100%" }}>
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
      </Box>
    </>
  );
}

