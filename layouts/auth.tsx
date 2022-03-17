import Link from "next/link";
import { ReactPropsWithChildren } from "../types/App.type";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthLayout({ children }: ReactPropsWithChildren) {
  const { data: session, status } = useSession();
  // console.log(session, status);

  return (
    <div>
      <h1>API Routes</h1>
      <nav>
        <Link href="/auth/client-side-authentication">
          <a>Client-side Authentication</a>
        </Link>
        <Link href="/auth/server-side-authentication">
          <a>Server-side Authentication</a>
        </Link>
        {session === null && (
          <Link href="/api/auth/signin">
            <a
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              SignIn
            </a>
          </Link>
        )}
        {status === "authenticated" && (
          <Link href="/api/auth/signout">
            <a
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              SignOut
            </a>
          </Link>
        )}
      </nav>
      {children}
    </div>
  );
}

export default AuthLayout;
