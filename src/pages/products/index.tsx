import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { productsTypeServices } from "./services";
// import { ErrorResponse } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { productsTypeResponse } from "./services/types";
import { Card } from "../../shared/components/cards/Cards";
import { LayoutBase } from "../../shared/layouts/LayoutBase";
import { FerramentaDaListagem } from "../../shared/components";

export default function products() {
  const [products, setproducts] = useState<productsTypeResponse[]>([]);

  const { isLoading, refetch } = useQuery({
    queryKey: ["/products"],
    queryFn: async () => {
      try {
        const data = await productsTypeServices.get();

        setproducts(data);
        console.log(data)
        return data;
      } catch (error) {
        enqueueSnackbar("Unable to obtain data", { variant: "error" });
      }
    },
  });

  console.log(products)
  return (
    <>
      <LayoutBase title={"Produtos"} barraDeFerramenta={<FerramentaDaListagem mostrarInputBusca/>}>
      
        <Box sx={{ display: 'flex', flexWrap: 'wrap' , alignItems:'center', justifyContent:'center'}}>
          {products &&(
            products.map((produto)=>(
              <Card title={produto.name} description={produto.description} price={produto.price}/>
            ))
          )

          }
        </Box>
      </LayoutBase>
    </>
  );
}
