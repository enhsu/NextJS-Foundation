import Link from "next/link";
import { LayoutPropsType } from "../types/App.type";

function PreRenderingLayout({ children }: LayoutPropsType) {
  return (
    <div>
      <h1>Pre-Rendering</h1>
      <nav>
        <Link href="/pre-rendering/getStaticProps-basic">
          <a>getStaticProps Basic</a>
        </Link>
        <Link href="/pre-rendering/getServerSideProps-basic">
          <a>getServerSideProps Basic</a>
        </Link>
        <Link href="/pre-rendering/pre-rendering-plus-client-side-fetch">
          <a>pre-rendering + clint-side fatching data</a>
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default PreRenderingLayout;
