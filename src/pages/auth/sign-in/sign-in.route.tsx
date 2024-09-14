import { SignInForm } from "@/components/auth/sign-in/sign-in-form/sign-in-form.tsx";
import { useTranslation } from "react-i18next";
import { assetsDeclaration } from "@/assets/assets.declaration.ts";
import { LocaleMenu } from "@/components/global/locale-menu/locale-menu.tsx";
import { Col, Row } from "antd";

export const SignInRoute = () => {
  const { t } = useTranslation();

  return (
    <Row className="w-[25rem] p-8 bg-white rounded-2xl">
      <Col span={24} className="flex justify-end">
        <LocaleMenu />
      </Col>
      <Col span={24}>
        <img
          src={assetsDeclaration.svg.LOGO}
          alt="logo"
          className="w-20 h-20 mx-auto mb-8"
        />
      </Col>
      <Col span={24}>
        <h2 className="text-xl font-bold text-center mb-4">
          {t("auth.welcome")}
        </h2>
      </Col>
      <Col span={24}>
        <SignInForm />
      </Col>
    </Row>
  );
};
