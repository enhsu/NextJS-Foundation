import Link from "next/link";
import { ReactElement } from "react";
import PreRenderingLayout from "../../../layouts/pre-rendering";
import RootLayout from "../../../layouts/RootLayout";

function GetServerSidePropsBasic() {
  return (
    <div>
      <h2>getServerSideProps</h2>
      <p>handle result with route</p>
      <Link href="/pre-rendering/getServerSideProps-basic/true">
        <a>Todo - complete: true</a>
      </Link>
      <br />
      <Link href="/pre-rendering/getServerSideProps-basic/false">
        <a>Todo - complete: false</a>
      </Link>
    </div>
  );
}

GetServerSidePropsBasic.getLayout = function (page: ReactElement) {
  return (
    <RootLayout>
      <PreRenderingLayout>{page}</PreRenderingLayout>
    </RootLayout>
  );
};

export default GetServerSidePropsBasic;
