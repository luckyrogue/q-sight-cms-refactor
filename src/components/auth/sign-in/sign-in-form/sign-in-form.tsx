import { Form, Input, Button } from "antd";
import { useState } from "react";
import { useMutateSignInData } from "@/components/auth/sign-in/sign-in-form/sign-in-form.services";
import { TSignInData } from "@/components/auth/sign-in/sign-in-form/sign-in-form.types.ts";
import { useTranslation } from "react-i18next";
import {
  emailRules,
  passwordRules,
} from "@/components/auth/sign-in/sign-in-form/sign-in-form.rules.ts";

export const SignInForm = () => {
  const { t } = useTranslation();

  const translatedEmailRules = emailRules.map((rule) => {
    return {
      ...rule,
      message: t(rule.message),
    };
  });

  const translatedPasswordRules = passwordRules.map((rule) => {
    return {
      ...rule,
      message: t(rule.message),
    };
  });

  const [signInData, setSignInData] = useState<TSignInData>({
    username: "",
    password: "",
  });

  const { mutateAsync, isPending } = useMutateSignInData(signInData);

  const onFinish = async (values: TSignInData) => {
    setSignInData(values);
    await mutateAsync();
  };

  return (
    <Form
      name="signin"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        label={t("sign-in-form.email")}
        name="username"
        rules={translatedEmailRules}
      >
        <Input disabled={isPending} placeholder="321321321@test.com" />
      </Form.Item>

      <Form.Item
        label={t("sign-in-form.password")}
        name="password"
        rules={translatedPasswordRules}
      >
        <Input.Password
          disabled={isPending}
          placeholder={t("sign-in-form.password")}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          loading={isPending}
          block
        >
          {t("sign-in-form.sign-in")}
        </Button>
      </Form.Item>
    </Form>
  );
};
