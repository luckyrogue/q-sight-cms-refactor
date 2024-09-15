import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import { TStructureLevelItemProps } from "@/components/private/administration/structure/list/structure-level/item/structure-level-item.types.ts";

export const StructureLevelItem: React.FC<TStructureLevelItemProps> = ({
  structureData,
  structureLevels,
}) => {
  return (
    <>
      <Row
        key={`item-${structureData?.id}-${structureLevels}`}
        gutter={16}
        align="middle"
        className="border-b p-2"
      >
        <Col span="6">
          <span className="text-gray-500 mr-3">Уровень {structureLevels}</span>
        </Col>
        <Col span="12">
          <span className="font-bold">{structureData?.name}</span>
        </Col>
        <Col span="3">
          <Button type="default" icon={<EditOutlined />} />
        </Col>
        <Col span="3">
          <Button type="default" danger icon={<DeleteOutlined />} />
        </Col>
      </Row>

      {structureData?.child &&
        structureData.child.map((structureData: any) => (
          <StructureLevelItem
            key={`child-${structureData?.child?.id}-${structureLevels + 1}`}
            structureData={structureData}
            structureLevels={structureLevels + 1}
          />
        ))}
    </>
  );
};
