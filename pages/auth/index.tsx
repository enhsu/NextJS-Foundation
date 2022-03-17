import { ReactElement } from "react";
import AuthLayout from "../../layouts/auth";
import RootLayout from "../../layouts/RootLayout";

function AuthPage() {
  return <div>Auth Index</div>;
}

AuthPage.getLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <AuthLayout>{page}</AuthLayout>
    </RootLayout>
  );
};

export default AuthPage;
