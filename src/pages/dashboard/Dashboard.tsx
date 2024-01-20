import { FerramentaDaListagem } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts/LayoutBase";

export const Dashboard = () => {
  return (
    <LayoutBase
      title={"Tela Inicial"}
      barraDeFerramenta={<FerramentaDaListagem mostrarInputBusca />}
    ></LayoutBase>
  );
};
