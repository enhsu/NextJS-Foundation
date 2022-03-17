import { ReactNode } from "react";
import RootNavbar from "./RootNavbar";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <RootNavbar />
      <main>{children}</main>
    </>
  );
}

export default RootLayout;
