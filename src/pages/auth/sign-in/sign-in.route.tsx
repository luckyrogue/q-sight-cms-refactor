import { SignInForm } from "@/components/auth/sign-in/sign-in-form/sign-in-form.tsx";
import { useTranslation } from "react-i18next";
import { assetsDeclaration } from "@/assets/assets.declaration.ts";

export const SignInRoute = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[25rem] p-8 bg-white rounded-2xl">
      <img
        src={assetsDeclaration.svg.LOGO}
        alt="logo"
        className="w-20 h-20 mx-auto mb-8"
      />
      <h2 className="text-xl font-bold text-center mb-4">
        {t("auth.welcome")}
      </h2>
      <SignInForm />
    </div>
  );
};
