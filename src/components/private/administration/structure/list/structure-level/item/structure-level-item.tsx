import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import { TStructureLevelItemProps } from "@/components/private/administration/structure/list/structure-level/item/structure-level-item.types.ts";

export const StructureLevelItem: React.FC<TStructureLevelItemProps> = ({
  structureData,
  structureLevels,
}) => {
  return (
    <>
      <Space className="flex justify-between items-center p-3 border-b">
        <div className="flex items-center">
          <span className="text-gray-500 mr-3">Уровень {structureLevels}</span>
          <span className="font-bold">{structureData?.name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button type="default" icon={<EditOutlined />} />
          <Button type="default" danger icon={<DeleteOutlined />} />
        </div>
      </Space>

      {structureData?.child &&
        structureData.child.map((structureData: any) => (
          <StructureLevelItem
            key={`item-${structureData.id}`}
            structureData={structureData}
            structureLevels={structureLevels + 1}
          />
        ))}
    </>
  );
};
