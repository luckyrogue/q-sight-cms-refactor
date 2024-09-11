import { AdministrationHeader } from "@/components/private/administration/general/header/administration-header.tsx";
import { Table } from "antd";

export const PositionsListRoute = () => {
  return (
    <div>
      <AdministrationHeader />
      <Table />
    </div>
  );
};
