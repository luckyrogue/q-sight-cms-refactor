import { useEffect, useState } from "react";
import { Button, Input, Space, Spin } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { StructureLevelItem } from "@/components/private/administration/structure/list/structure-level/item/structure-level-item.tsx";
import { useGetCompanyStructure } from "@/components/private/administration/structure/list/structure-level/structure-level.services.ts";

export const StructureLevel = () => {
    const { companyStructure } = useGetCompanyStructure();
    const [structure, setStructure] = useState<any[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [newLevelName, setNewLevelName] = useState("");

    useEffect(() => {
        if (Array.isArray(companyStructure) && companyStructure.length > 0) {
            setStructure(companyStructure);
        } else {
            setStructure([companyStructure]);
        }
    }, [companyStructure]);

    const handleAddLevel = () => {
        if (newLevelName) {
            setStructure((prevStructure) => [
                ...prevStructure,
                { id: prevStructure.length + 1, name: newLevelName, level: prevStructure.length + 1 },
            ]);
            setNewLevelName("");
            setIsAdding(false);
        }
    };

    const handleCancelAdd = () => {
        setNewLevelName("");
        setIsAdding(false);
    };

    return (
        <div className="border rounded-xl p-3 bg-white">
            {Array.isArray(structure) && structure.length > 0 && (
                structure.map((item) => (
                    <StructureLevelItem key={item?.id} structureData={item} structureLevels={1} />
                ))
            )}

            {isAdding ? (
                <div className="p-2">
                    <Space className="w-full justify-between items-center">
                        <Input
                            value={newLevelName}
                            onChange={(e) => setNewLevelName(e.target.value)}
                            placeholder="Введите название уровня"
                        />
                        <Button
                            type="default"
                            icon={<CheckOutlined />}
                            onClick={handleAddLevel}
                            disabled={!newLevelName.trim()}
                        />
                        <Button type="default" danger icon={<CloseOutlined />} onClick={handleCancelAdd} />
                    </Space>
                </div>
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
