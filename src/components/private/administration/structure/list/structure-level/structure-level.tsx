import { useEffect, useState } from "react";
import { Button } from "antd";
import { StructureLevelItem } from "@/components/private/administration/structure/list/structure-level/item/structure-level-item.tsx";
import { useGetCompanyStructure } from "@/components/private/administration/structure/list/structure-level/structure-level.services.ts";
import { AddLevelForm } from "@/components/private/administration/structure/list/structure-level/add-level-form/add-level-form.tsx";
import { findLastParentId } from "@/components/private/administration/structure/list/structure-level/structure-level.util.ts";

export const StructureLevel = () => {
  const { companyStructure } = useGetCompanyStructure();
  const [structure, setStructure] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [lastParentId, setLastParentId] = useState<number | null>(null);

  useEffect(() => {
    if (Array.isArray(companyStructure) && companyStructure.length > 0) {
      setStructure(companyStructure);
      setLastParentId(findLastParentId(companyStructure));
    } else {
      setStructure([companyStructure]);
      setLastParentId(companyStructure?.id || null);
      setIsAdding(false);
    }
  }, [companyStructure]);

  return (
    <div className="border rounded-xl p-3 bg-white">
      {Array.isArray(structure) &&
        structure.length > 0 &&
        structure.map((item) => (
          <StructureLevelItem
            key={item?.id}
            structureData={item}
            structureLevels={1}
          />
        ))}

      {isAdding ? (
        <AddLevelForm
          parentId={lastParentId}
          setIsAdding={setIsAdding}
          handleCancelAdd={() => setIsAdding(false)}
        />
      ) : (
        <Button
          type="primary"
          block
          className="mt-2"
          onClick={() => setIsAdding(true)}
          disabled={isAdding}
        >
          Добавить уровень
        </Button>
      )}
    </div>
  );
};
