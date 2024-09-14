import { AdministrationHeader } from "@/components/private/administration/general/header/administration-header.tsx";
import { Table } from "antd";
import { positionsListTableColumns } from "@/pages/private/administration/positions/list/positions-list.table.tsx";
import { useGetPositionsList } from "@/pages/private/administration/positions/list/positions-list.services.ts";
import { useEffect } from "react";
import { useDependenciesObserverStore } from "@/providers/store/dependencies-observer/dependencies-observer.store.ts";

export const PositionsListRoute = () => {
  const { companyId } = useDependenciesObserverStore();
  const { positionsList, isPositionsLoading, refetchPositionsList } =
    useGetPositionsList();

  useEffect(() => {
    if (companyId) refetchPositionsList().then((r) => r);
  }, [companyId]);

  return (
    <div>
      <AdministrationHeader />
      <Table
        rowKey="id"
        dataSource={positionsList?.content}
        loading={isPositionsLoading}
        columns={positionsListTableColumns}
      />
    </div>
  );
};
