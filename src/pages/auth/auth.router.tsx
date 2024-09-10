import { AuthLayout } from "@/pages/auth/auth.layout.tsx";
import { SignInRoute } from "@/pages/auth/sign-in/sign-in.route.tsx";

export const AuthRouter = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignInRoute />,
      },
    ],
  },
];
