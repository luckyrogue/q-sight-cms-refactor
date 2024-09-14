import { Button, Dropdown, MenuProps } from "antd";
import { useLocaleStore } from "@/providers/store/locale/locale.store.ts";

export const LocaleMenu = () => {
  const { locale, setLocale } = useLocaleStore();

  const localeItems: MenuProps["items"] = [
    {
      key: "kz",
      label: <span className="fi fi-kz" />,
      onClick: () => setLocale("kz"),
    },
    {
      key: "ru",
      label: <span className="fi fi-ru" />,
      onClick: () => setLocale("ru"),
    },
  ];

  return (
    <Dropdown menu={{ items: localeItems }} trigger={["click"]}>
      <Button>
        <span className={`fi fi-${locale === "kz" ? "kz" : "ru"}`} />
      </Button>
    </Dropdown>
  );
};
