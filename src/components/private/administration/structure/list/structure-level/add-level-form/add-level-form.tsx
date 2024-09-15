import { Button, Col, Form, Input, Row } from "antd";
import { useTranslation } from "react-i18next";
import {
  TAddLevelData,
  TAddLevelFormProps,
} from "@/components/private/administration/structure/list/structure-level/add-level-form/add-level-form.types.ts";
import React, { useState } from "react";
import { useAddLevelFormServices } from "@/components/private/administration/structure/list/structure-level/add-level-form/add-level-form.services.ts";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useDependenciesObserverStore } from "@/providers/store/dependencies-observer/dependencies-observer.store.ts";
import { addLevelNamingRules } from "@/components/private/administration/structure/list/structure-level/add-level-form/add-level-form.rules.ts";

export const AddLevelForm: React.FC<TAddLevelFormProps> = ({
  parentId,
  setIsAdding,
  handleCancelAdd,
}) => {
  const { companyId } = useDependenciesObserverStore();
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const [newLevel, setNewLevel] = useState<TAddLevelData>({
    companyId: companyId,
    name: "",
    parentId: parentId,
  });

  const translatedTitleRules = addLevelNamingRules.map((rule) => ({
    ...rule,
    message: t(rule.message),
  }));

  const { addLevelStructure, isLevelPending } =
    useAddLevelFormServices(newLevel);

  const addLevelStructureHandler = (values: TAddLevelData) => {
    setNewLevel({ ...newLevel, name: values.name });
    addLevelStructure().then(() => {
      setIsAdding(false);
    });
  };

  return (
    <Form
      form={form}
      name="add-level"
      onFinish={addLevelStructureHandler}
      layout="vertical"
      className="p-2"
    >
      <Row gutter={16}>
        <Col span={18}>
          <Form.Item name="name" rules={translatedTitleRules}>
            <Input
              disabled={isLevelPending}
              placeholder={t("structure-level-form.title")}
            />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item>
            <Button
              type="default"
              htmlType="submit"
              loading={isLevelPending}
              icon={<CheckOutlined />}
            />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Button
            type="default"
            danger
            icon={<CloseOutlined />}
            onClick={handleCancelAdd}
          />
        </Col>
      </Row>
    </Form>
  );
};
