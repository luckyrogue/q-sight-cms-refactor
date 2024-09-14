import { Tag } from "antd";
import React from "react";
import { TPositionsCmsModuleProps } from "@/components/private/administration/positions/list/modules-tags/modules/cms/positions-cms-module.types.ts";

export const PositionsCmsModule: React.FC<TPositionsCmsModuleProps> = ({
  modules,
}) => {
  return (
    <>
      {modules.map((role: any) =>
        role.adminData?.name !== undefined ? (
          <Tag key={role.adminData?.name}>{role.adminData?.name}</Tag>
        ) : null,
      )}
    </>
  );
};
