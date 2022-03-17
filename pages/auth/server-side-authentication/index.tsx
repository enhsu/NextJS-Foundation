import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { ReactElement } from "react";
import AuthLayout from "../../../layouts/auth";
import RootLayout from "../../../layouts/RootLayout";

function ServerSideAuthentication({ data }: { [key: string]: any }) {
  // console.log("Context: ", context);
  // console.log("Session: ", session);
  return (
    <div>
      <h1>Server-side Authentication</h1>
      <p>{data}</p>
    </div>
  );
}

ServerSideAuthentication.getLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <AuthLayout>{page}</AuthLayout>
    </RootLayout>
  );
};

export default ServerSideAuthentication;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/auth/server-side-authentication`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      // context,
      session,
      data: session ? "personalized things" : "public things",
    },
  };
};
