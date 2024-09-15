import type { Rule } from "antd/lib/form";

export const emailRules: Rule[] = [
  {
    required: true,
    message: "sign-in-form.email-required",
  },
  {
    type: "email",
    message: "sign-in-form.email-invalid",
  },
];

export const passwordRules: Rule[] = [
  {
    required: true,
    message: "sign-in-form.password-required",
  },
  {
    min: 5,
    message: "sign-in-form.password-min",
  },
  {
    pattern: /[^а-яА-Я]/,
    message: "Пароль не должен содержать кириллицу",
  },
];
