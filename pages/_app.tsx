import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppPropsWithLayout } from "./../types/App.type";

// function Auth({ children }: ReactPropsWithChildren): ReactElement {
//   const { data: session, status } = useSession({ required: true });
//   const isUser = !!session?.user;

//   if (isUser) {
//     return <>children</>;
//   }

//   return <div>Loading...</div>;
// }

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}

export default MyApp;
