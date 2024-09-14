import React from "react";
import { TPositionsModulesTagsProps } from "@/components/private/administration/positions/list/modules-tags/positions-modules-tags.types.ts";
import { PositionsMobileModule } from "@/components/private/administration/positions/list/modules-tags/modules/mobille/positions-mobile-module.tsx";
import { PositionsCmsModule } from "@/components/private/administration/positions/list/modules-tags/modules/cms/positions-cms-module.tsx";

export const PositionsModulesTags: React.FC<TPositionsModulesTagsProps> = ({
  modules,
  modulesTags,
}) => {
  if (!modules) return null;

  return (
    <>
      {modulesTags === "adminData" ? (
        <PositionsCmsModule modules={modules} />
      ) : (
        <PositionsMobileModule modules={modules} />
      )}
    </>
  );
};
