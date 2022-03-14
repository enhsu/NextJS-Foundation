import Link from "next/link";
import PreRenderingLayout from "../../../layouts/pre-rendering";

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

GetServerSidePropsBasic.Layout = PreRenderingLayout;

export default GetServerSidePropsBasic;
