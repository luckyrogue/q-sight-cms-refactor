import { Button, Dropdown } from 'antd';
import { MOBILE_MENU_CONSTANT } from './mobile-menu.constant'; // Your constant file
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {TMobileMenuItem} from "@/components/private/layout/mobile-menu/mobile-menu.types.ts";

export const MobileMenu = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleButtonClick = (key: string, hasChildren: boolean) => {
        if (!hasChildren) {
            navigate(key);
        }
    };

    const renderMenuItem = (item: TMobileMenuItem) => {
        if (item.children) {
            return (
                <Dropdown
                    key={item.key}
                    overlay={
                        <div className="bg-white shadow rounded-lg p-2">
                            {item.children.map((child) => (
                                <Button
                                    key={child.key}
                                    type="text"
                                    onClick={() => navigate(child.key)}
                                    className="block w-full text-left text-xs"
                                    style={{ padding: '4px 8px' }}
                                >
                                    {t(child.label)}
                                </Button>
                            ))}
                        </div>
                    }
                    trigger={['click']}
                >
                    <Button
                        type="text"
                        className="flex flex-col items-center justify-center"
                        onClick={() => handleButtonClick(item.key, true)}
                    >
                        <div style={{ fontSize: '24px' }}>{item.icon}</div>
                        <span className="mt-1 text-xs">{t(item.label)}</span>
                    </Button>
                </Dropdown>
            );
        }
        return (
            <Button
                key={item.key}
                type="text"
                className="flex flex-col items-center justify-center"
                onClick={() => handleButtonClick(item.key, false)}
            >
                <div>{item.icon}</div>
                <span className="mt-1 text-xs">{t(item.label)}</span>
            </Button>
        );
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around items-center h-16">
            {MOBILE_MENU_CONSTANT.map((item) => renderMenuItem(item))}
        </div>
    );
};
