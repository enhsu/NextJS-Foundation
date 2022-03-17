import { getSession, signIn } from "next-auth/react";
import { ReactElement, useEffect, useState } from "react";
import AuthLayout from "../../../layouts/auth";
import RootLayout from "../../../layouts/RootLayout";

function ClientSideAuthentication() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      // console.log(session);
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  return <h1>Client-side Authentication</h1>;
}

ClientSideAuthentication.getLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <AuthLayout>{page}</AuthLayout>
    </RootLayout>
  );
};

export default ClientSideAuthentication;
