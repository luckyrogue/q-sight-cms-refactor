import { App, Form, Input, Button } from "antd";
import { useState } from "react";
import { useMutateSignInData } from "@/components/auth/sign-in/sign-in-form/sign-in-form.services";
import {TSignInData} from "@/components/auth/sign-in/sign-in-form/sign-in-form.types.ts";

export const SignInForm = () => {
  const { notification } = App.useApp();

  const [signInData, setSignInData] = useState<TSignInData>({
    email: "",
    password: "",
  });

  const { mutateAsync, isPending } = useMutateSignInData(signInData);

  const onFinish = async (values: TSignInData) => {
    try {
      setSignInData(values);
      mutateAsync();
    } catch (error: unknown) {
      notification.error({
        message: "Error",
        description: (error as Error).message,
      });
    }
  };

  return (
      <div className="max-w-96 m-auto">
        <Form
            name="signin"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
        >
          <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isPending} block>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
  );
};