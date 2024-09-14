import { Tag } from "antd";
import React from "react";
import { TPositionsMobileModuleProps } from "@/components/private/administration/positions/list/modules-tags/modules/mobille/positions-mobile-module.types.ts";

export const PositionsMobileModule: React.FC<TPositionsMobileModuleProps> = ({
  modules,
}) => {
  return (
    <>
      {modules.map((role: any) =>
        role.mobileData?.name !== undefined ? (
          <Tag key={role.mobileData?.name}>{role.mobileData?.name}</Tag>
        ) : null,
      )}
    </>
  );
};
