import { AdministrationHeader } from "@/components/private/administration/general/header/administration-header.tsx";
import { Table } from "antd";
import {positionsListTableColumns} from "@/pages/private/administration/positions/list/posittions-list.table.tsx";

export const PositionsListRoute = () => {
  return (
    <div>
      <AdministrationHeader />
      <Table dataSource={} columns={positionsListTableColumns} />
    </div>
  );
};
